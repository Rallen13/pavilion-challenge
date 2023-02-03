import { useState, useEffect } from 'react';
import './App.css';
import { getMembers } from './utils/ApiCalls';
import MemberCardContainer from './components/MemberCardContainer/MemberCardContainer';
import { parseLinkHeader } from '@web3-storage/parse-link-header';

function App() {
  const [members, setMembers] = useState([]);
  const [since, setSince] = useState(0);
  const [links, setLinks] = useState({});

  useEffect(() => {
    try {
      getMembers(since).then((response) => {
        setMembers(response.data);
        const linkHeader = response.headers.link;
        if (linkHeader) {
          setLinks(parseLinkHeader(linkHeader));
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [since]);

  const nextPage = () => {
    if (links && links.next) {
      setSince(links.next.since);
    }
  };

  return (
    <div className="App">
      <img
        src="https://back.joinpavilion.com/wp-content/uploads/2022/09/pavilion-logo.svg"
        alt=""
      ></img>
      <MemberCardContainer members={members} />
      <div className="button-navigation">
        <button className="button next-button" onClick={() => nextPage()}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
