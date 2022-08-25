import './App.css';
import NavBar from './components/NavBar';
import SnackBar from './components/SnackBar';
import Box from '@mui/material/Box'
import {Route, Routes} from 'react-router-dom'
import Logout from './views/Logout';
import Login from './views/Login';
import ReadingListView from './views/ReadingListView'
import RegisterAndEdit from './views/RegisterAndEdit'
import SubjectFilter from './views/SubjectFilter'
import SingleBook from './views/SingleBook'


const HomePage=()=>{return(<h1 sx={{}}>STORY KEEPER</h1>


)}


function App() {

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
            <Route path="/SingleBook/:itemId" element={<SingleBook/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Routes>
        </Box>
      </NavBar>
    </>
  );
}

export default App;
