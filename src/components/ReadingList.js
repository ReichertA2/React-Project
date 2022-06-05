import React, { useContext, useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import BookmarkRemoveSharpIcon from '@mui/icons-material/BookmarkRemoveSharp';
import useBookCard from '../hooks/useBookCard';
import Error from './Error';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';


export default function ReadingList() {
  const { books, error } = useBookCard();
  // const {book, _setBook} = useContext(AppContext)

  if (!books) {
      return (
          <Box sx={{ display: "flex" }}>
              <CircularProgress />
          </Box>

      )

  }

  if (error) {
      return (
          <Box sx={{ display: "flex" }}>
              <Error>{error}</Error>
          </Box>
      )
  }



  return (

    <ImageList cols={3}>
      
      
        <ImageListItem key={books.id}>
          <img
            src={`${books.img}`}
            srcSet={`${books.img}`}
            alt={books.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={books.title}
            subtitle={books.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${books.title}`}
              >
                <BookmarkRemoveSharpIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      
    </ImageList>
  );
}

// const book1={
//   "title":"The Wonderful Wizard of Oz",
//   "img":"https://res.cloudinary.com/dla9zwzty/image/upload/v1653508898/wizard_of_oz_gt9dfl.jpg",
//   "id":1
// }
// const book2={
//   "title":"Harry Potter and the philosopher's stone",
//   "img":"https://res.cloudinary.com/dla9zwzty/image/upload/v1654094815/harry_potter_and_the_philosophers_stone_xgasfv.jpg",
//   "id":2
// }
// const book3={
//   "title":"Harry Potter and the Deathly Hallows",
//   "img":"https://res.cloudinary.com/dla9zwzty/image/upload/v1654095009/harry_potter_and_the_deathly_hallows_ahsbgf.jpg",
//   "id":3
// }

// const books=[book1, book2, book3]