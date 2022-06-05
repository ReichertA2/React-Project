import React, { useContext, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useBook from '../hooks/useBook'
import { CircularProgress } from '@mui/material';
import Error from './Error';

import { AppContext } from '../context/AppContext';
import { ShopTwoTwoTone } from '@mui/icons-material';
import Box from '@mui/material/Box';


export default function ComboBox() {
    
  
    // for (let book of books){
      const {books, error} = useBook();
      const {book, _setBook} = useContext(AppContext)
      console.log(books)
      let subjects = [];

      if(!books){
        return(
        <Box sx={{display:"flex"}}>
          <CircularProgress/>
        </Box>
    
        )
    
      }

      
  if (error){
    return (
      <Box sx={{display:"flex"}}>
        <Error>{error}</Error>
      </Box>
    )
  }
  if (books){
    const getBookSubjects = function(){ 
        
      books.forEach((item)=> subjects.push(item.subject)) 
      let shortendList = [...new Set(subjects)]
      return shortendList
    }
      //   subjects.push()
  
    subjects = getBookSubjects()
  
  }
    
  

  
    
  // const {books, error} = useBookCard();
  return (
    
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={subjects}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Subject" />}
    />
  );
}




// [
  
//   { label: 'Courage and Bravery'},
//   { label: 'death'},
  
// ]
