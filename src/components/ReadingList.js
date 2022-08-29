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
    <div sx={{backgroundImage:"linear-gradient(to top, #28585c, #204e53, #17444b, #0f3a42, #073039, #09313a, #0c333b, #0e343c, #1a4048, #264d54, #315a60, #3d676c);"}}>
    <Button key="delete" onClick={()=>{ emptyCart()}} size="small">Remove All</Button>
      <Box sx={{ mb: 15}}>
        {[...new Set(cart?.map(JSON.stringify))]?.map(JSON.parse)?.map((item) => (
            <BookCard key={item.id} item={item} />
          ))}
      </Box>
    </div>
  );
}

