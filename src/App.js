import { useState, useEffect } from 'react';
import './App.css';
import { getMembers } from './utils/ApiCalls';
import MemberCardContainer from './components/MemberCardContainer/MemberCardContainer';

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    try {
      getMembers().then((response) => {
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
