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
      <img src="https://back.joinpavilion.com/wp-content/uploads/2022/09/pavilion-logo.svg" alt="" class="jsx-2827836672"></img>
      <MemberCardContainer members={members} />
    </div>
  );
}

export default App;
