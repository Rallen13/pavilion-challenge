import { useState, useEffect } from 'react';
import './App.css';
import { getMembers } from './utils/ApiCalls';
import MemberCardContainer from './components/MemberCardContainer/MemberCardContainer';
import { parseLinkHeader } from '@web3-storage/parse-link-header';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

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
//scrolls page to top after clicking next button
      window.scrollTo(0, 0);
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
      <Header />
      <MemberCardContainer members={members} />
      <div className="button-navigation">
        <Button onClick={() => nextPage()}></Button>
      </div>
    </div>
  );
}

export default App;
