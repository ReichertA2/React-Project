import React, { useContext, useState, useEffect } from "react";
import BookmarkRemoveSharpIcon from "@mui/icons-material/BookmarkRemoveSharp";
import useBookCard from "../hooks/useBookCard";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import BookCard from "../components/BookCard";
import { AppContext } from "../context/AppContext";

export default function ReadingList() {
  const {cart,error} = useContext(AppContext)

  // const {book, _setBook} = useContext(AppContext)

  if (!cart) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  console.log('readinglist', cart)
  return (
    <>
      <Box sx={{ mb: 15 }}>
        {[...new Set(cart?.map(JSON.stringify))]?.map(JSON.parse)?.map((item) => (
            <BookCard key={item.id} item={item} />
          ))}
      </Box>
    </>
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
