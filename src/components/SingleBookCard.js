import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import useBookCard from "../hooks/useBookCard";

import { useParams } from "react-router-dom";

export default function SingleBookCard() {
  const { itemId } = useParams();

  const { books, error } = useBookCard(itemId);
  console.log("SingleBookCard", books);

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }

  if (!books) {
    console.log("no item");

    return (
      <Box
        sx={{
          
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div
      
    >
      <Card sx={{ width: 300, minHeight:550,margin: "auto", marginTop: "100px",  }}>
        <CardMedia
        
          component="img"
          minheight="400"
          image={books.img}
          alt={books.title}
        />
        <CardContent>
            
          <Typography style={{textAlign:'center'}} gutterBottom variant="h8" component="div">
            {books.title}
          </Typography>
          <Typography
            style={{textAlign:'center'  }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {books.author}
          </Typography>
          <Typography style={{textAlign:'center'}} variant="body2" color="text.secondary">
            {books.summary}
          </Typography>
          <Typography style={{textAlign:'right'}} variant="body2" color="text.secondary">
            {books.pages}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
