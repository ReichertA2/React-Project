import React, { useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import BookmarkAddSharpIcon from "@mui/icons-material/BookmarkAddSharp";
import useBook from "../hooks/useBook";
import Box from "@mui/material/Box";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import { AppContext } from "../context/AppContext";
import {useNavigate} from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';


export default function AllBookBrowser(filterBy) {
  const { books, error } = useBook();
  const { book, _setBook } = useContext(AppContext);
  const {addToCart, setAlert} = useContext(AppContext)
  const navigate = useNavigate()

  const handleAddToCart=(item)=>{
    addToCart(item)
    setAlert(`You have added ${item.title} to your Cart`)
    console.log("addToCart", item)
  }



  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  console.log("allBookBrowser", filterBy);

  
  if (!books) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

 

  if (filterBy.filterBy !== null ) {
    let bookList = [];

    console.log("allBookBrowser", filterBy);
    // console.log('testing books',books[0].subject)
    bookList = books.filter((item) => item.subject === filterBy.filterBy);
    console.log("bookList: ", bookList);
    return (
      <ImageList cols={3}>
        {/* {(bookList !== []) ? 
        // 'test':''} */}

        {bookList.map((item) => (

            
          <ImageListItem key={item.id}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={<>
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                  onClick={()=>{handleAddToCart(item)}}
                  
                >
                  <BookmarkAddSharpIcon />

                </IconButton>
                 <IconButton
                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                 aria-label={`info about ${item.title}`}
                 onClick={()=>navigate('/SingleBook/'+item.id)}
               >
                 <InfoIcon />
               </IconButton>
               </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  return (
    <ImageList cols={3}>
      {books.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={<>
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
                onClick={()=>{handleAddToCart(item)}}
              >
                <BookmarkAddSharpIcon />
              </IconButton>
              <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
              onClick={()=>navigate('/SingleBook/'+item.id)}
            >
              <InfoIcon />
            </IconButton>
            </> }
          />
        </ImageListItem>
        
      ))}
    </ImageList>
  );
}









