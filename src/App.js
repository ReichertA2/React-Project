
import './App.css';
import Button from './components/Button';
// import Error from './components/Error';
import NavBar from './components/NavBar';
import BookCard from './components/BookCard';
import Switch from './components/Switch';
import LoginForm from './forms/LoginForm';
import RegisterEditForm from './forms/RegisterEditForm';

function App() {
  return (
      <NavBar>
        <BookCard></BookCard>
        <Switch></Switch>
        <Button>Log Out</Button>
        {/* <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error> */}
        <RegisterEditForm/>
        {/* <LoginForm/> */}
      </NavBar>
  );
}

export default App;
