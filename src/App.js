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



const HomePage=()=>{return(<Box sx={{backgroundImage: "linear-gradient(to top, #28585c, #204e53, #17444b, #0f3a42, #073039, #09313a, #0c333b, #0e343c, #1a4048, #264d54, #315a60, #3d676c);", backgroundSize: "100%",
minHeight: 920,}}><h1 sx={{margin:'center', padding:'0px'}}>STORY KEEPER</h1></Box>


)}


function App() {

  return (
    <>
      
      <NavBar>
      <SnackBar/>
        <Box sx={{minHeight:'1px'}} >
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ReadingList" element={<ReadingListView/>}/>
            <Route path="/Browse" element={<SubjectFilter/>}/>
            <Route path="/RegisterEdit" element={<RegisterAndEdit/>}/>
            <Route path="/SingleBook/:itemId" element={<SingleBook/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<Logout/>}/>
          </Routes>
        </Box>
      </NavBar>
    </>
  );
}

export default App;
