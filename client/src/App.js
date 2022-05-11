import logo from './logo.svg';
// import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import {getUser} from './actions';
import NavBar from './components/NavBar'
import CommitsList from './components/CommitsList';

function App() {

  const dispatch = useDispatch()



  return (
    <div >
      <NavBar></NavBar>
      <CommitsList></CommitsList>
    </div>
  );
}

export default App;
