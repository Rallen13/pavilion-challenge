import { useState, useEffect } from 'react';
import './App.css';
import { getMembers } from './utils/ApiCalls';
import MemberCardContainer from './components/MemberCardContainer/MemberCardContainer';

function App() {
  const [members, setMembers] = useState([]);
  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    try {
      getMembers().then((response) => {
        setMembers(response.data);
        setPrevPage(response.url);
        const nextLink = splitNextLink(response.headers.link);
        setNextPage(nextLink);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const splitNextLink = (link) => {
    return link.split(', ')[0].split('>')[0].slice(1);
  };

  return (
    <div className="App">
      <img
        src="https://back.joinpavilion.com/wp-content/uploads/2022/09/pavilion-logo.svg"
        alt=""
      ></img>
      <MemberCardContainer members={members} />
      <div>
      </div>
    </div>
  );
}

export default App;
