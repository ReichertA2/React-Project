
import './App.css';
import Button from './components/Button';
// import Error from './components/Error';
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



// Aydee's token below
const my_token = "i6PGGokhGDIxBp4wCtvM-13uhFElUqVY4tWU4AB_EAA"

// maya token below
// const user1 = "mfaU1eSio5dLx3iUTzzdFUAyKCS_RxWjdXvDe3cMouY"

// leah token below
// const user2 = "N-fyOrXHvyRM-W-UDrMHrm8n_p7QxM-csWw1UHHDuHQ"

const handleAPITest= async ()=>{
  const source = CancelToken.source();
  // const response_object=await apiBook.get(source.token);
  // let data={
  //     "email" : "leah@yahoo.com",
  //     "first_name" : "Leah",
  //     "last_name" : "Ellis",
  //     "password" : "123",
  // }
  // const response_object=await apiUser.post(data, source.token);
  // const response_object=await getUser("aydee@yahoo.com", "123", source.token);
  // const response_object=await apiUser.put(user1,{'last_name':'Dumbo'}, source.token);
  // const response_object= await apiUser.del(user1, source.token);
  const response_object=await apiBook.getOneBook(20, source.token);
  console.log(response_object)
}

function App() {
  return (
      <NavBar>
        {/* <AllBookBrowser/> */}
        {false ?<LoginForm/>: <RegisterEditForm/>}
        
        
        {/* <FilterBySubject/>
        <AllBookBrowser/>
        <ReadingList/>
        <BookCard></BookCard>
        <Switch></Switch> */}
        {/* <Button onClick={handleAPITest}>Test API Call</Button> */}
        {/* <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error> */}
        {/* <RegisterEditForm/> */}
        
        <AddRemoveBookMenu/>
      </NavBar>
  );
}

export default App;
