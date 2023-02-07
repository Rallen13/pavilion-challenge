import { useState, useEffect } from 'react';
import './App.css';
import { getMembers } from './utils/ApiCalls';
import MemberCardContainer from './components/MemberCardContainer/MemberCardContainer';
import { parseLinkHeader } from '@web3-storage/parse-link-header';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Error from './components/Error/Error';

function App() {
  const [members, setMembers] = useState([]);
  const [since, setSince] = useState(0);
  const [links, setLinks] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    getMembers(since)
      .then((response) => {
        setMembers(response.data);
        const linkHeader = response.headers.link;
        if (linkHeader) {
          setLinks(parseLinkHeader(linkHeader));
        }
        /* 
        Use the parseLinkHeader method to mutate the linkHeader variable in to an object like below:
          
        {
          first: {
            since: '', 
            rel: 'first', 
            url: 'https://api.github.com/users{?since}'
          },
          next: {
            since: '19', 
            per_page: '10', 
            rel: 'next', 
            url: 'https://api.github.com/users?since=19&per_page=10'
          }
        }

        Then we set links in state to use in conditional checks in the nextPage callback
        */
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
      window.scrollTo(0, 0);
      /*
      scrolls page to top after clicking next button
      */
  }, [since]);
  /* 
  useEffect runs on intial load, and then each time 'since' is updated.
  The nextPage callback updates 'since' to rerender the data.
  */

  const nextPage = () => {
    if (links && links.next) {
      setSince(links.next.since);
    }
    /* 
    Check if links exist and also includes a "next" object. 
    If true, then set since to the since key from the "next" object.
    */
  };

  return (
    <div className="App">
      <Header />
      {error && <Error />}
      {!error && (
        <>
          <MemberCardContainer members={members} />
          <div className="button-navigation">
            <Button onClick={() => nextPage()} />
          </div>
        </>
      )}
      {/* conditionally render the view based on error status */}
    </div>
  );
}

export default App;
