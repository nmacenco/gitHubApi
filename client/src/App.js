import logo from './logo.svg';
// import './App.css';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar'
import CommitsList from './components/CommitsList';

function App() {

  return (
    <div className="h-full  " >
      <NavBar></NavBar>
      <CommitsList></CommitsList>
    </div>
  );
}

export default App;
