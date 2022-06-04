import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import useBook from '../hooks/useBook';
import Box from '@mui/material/Box';
import Error from './Error';
import { CircularProgress } from '@mui/material';


export default function AllBookBrowser() {

  const {books, error} = useBook();

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
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <BookmarkAddSharpIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const book1={
  "title":"The Wonderful Wizard of Oz",
  "author":"L. Frank Baum",
  "subject":"self-sufficiency",
  "img":"https://res.cloudinary.com/dla9zwzty/image/upload/v1653508898/wizard_of_oz_gt9dfl.jpg",
  "id":1
}
const book2={
  "title":"Harry Potter and the philosopher's stone",
  "author":"J. K. Rowling",
  "subject":"Courage and Bravery",
  "img":"https://res.cloudinary.com/dla9zwzty/image/upload/v1654094815/harry_potter_and_the_philosophers_stone_xgasfv.jpg",
  "id":2
}
const book3={
  "title":"Harry Potter and the Deathly Hallows",
  "author":"J. K. Rowling",
  "subject":"death",
  "img":"https://res.cloudinary.com/dla9zwzty/image/upload/v1654095009/harry_potter_and_the_deathly_hallows_ahsbgf.jpg",
  "id":3
}

const books=[book1, book2, book3]