import React, { useContext} from "react";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import BookCard from "../components/BookCard";
import { AppContext } from "../context/AppContext";
import Button from '@mui/material/Button';

export default function ReadingList() {
  const {cart,error, emptyCart} = useContext(AppContext)

  


  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  
  if (!cart) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  
  console.log('readinglist', cart)
  return (
    <>
    <Button key="delete" onClick={()=>{ emptyCart()}} size="small" sx={{display:"block"}}>Remove All</Button>
      <Box sx={{ mb: 15}}>
        {[...new Set(cart?.map(JSON.stringify))]?.map(JSON.parse)?.map((item) => (
            <BookCard key={item.id} item={item}  />
          ))}
      </Box>
    </>
  );
}

