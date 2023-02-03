import { useState, useEffect } from 'react';
import './App.css';
import { getMemberCards } from './utils/ApiCalls';
import MemberCardContainer from './components/MemberCardContainer/MemberCardContainer';

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    try {
      getMemberCards().then((response) => {
        setMembers(response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <MemberCardContainer members={members} />
    </div>
  );
}

export default App;
