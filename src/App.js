
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import BookCard from './components/BookCard';
import Switch from './components/Switch';
import LoginForm from './forms/LoginForm';
import RegisterEditForm from './forms/RegisterEditForm';

import {getUser} from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';

import apiBook from './api/apiBook';
import apiUser from './api/apiUser';

import AllBookBrowser from './components/AllBookBrowser';
import ReadingList from './components/ReadingList';
import FilterBySubject from './components/FilterBySubject';
import AddRemoveBookMenu from './components/AddRemoveBookMenu'
import SnackBar from './components/SnackBar';
import {useContext} from 'react'
import Box from '@mui/material/Box'
import {Route, Routes} from 'react-router-dom'
import Logout from './views/Logout';
import Login from './views/Login';
import ReadingListView from './views/ReadingListView'
import RegisterAndEdit from './views/RegisterAndEdit'
import SubjectFilter from './views/SubjectFilter'
import SingleBook from './views/SingleBook'

const HomePage=()=>{return(<h1>Welcome to the Marvelous BookStore!</h1>)}




function App() {

  // const {user}=useContext(AppContext)
  return (
    <>
      <SnackBar/>
      <NavBar>
        <Box sx={{minHeight:'90vh'}}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ReadingList" element={<ReadingListView/>}/>
            <Route path="/Browse" element={<SubjectFilter/>}/>
            <Route path="/RegisterEdit" element={<RegisterAndEdit/>}/>
            <Route path="/SingleBook" element={<SingleBook/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>

        {/* <AllBookBrowser/> */}
        {/* <LoginForm/> 
        <RegisterEditForm/> */}
        {/* <AllBookBrowser/> */}
        {/* <ReadingList/> */}
        {/* <BookCard></BookCard>  */}
        {/* <FilterBySubject/> */}

        
        {/* <ReadingList/> */}
        
        {/* <Switch></Switch>  */}
        {/* <Button onClick={handleAPITest}>Test API Call</Button> */}
        {/* <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error> */}
        {/* <RegisterEditForm/> */}
        
        {/* <AddRemoveBookMenu/> */}
          </Routes>
        </Box>
      </NavBar>
    </>
  );
}

export default App;
