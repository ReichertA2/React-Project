
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import BookCard from './components/BookCard';

function App() {
  return (
      <NavBar>
        <BookCard></BookCard>
        <Button color="success">Click this button</Button>
        <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error>
      </NavBar>
  );
}

export default App;
