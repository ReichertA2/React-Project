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
          display: "flex",
          backgroundImage:
            "linear-gradient(to top, #28585c, #204e53, #17444b, #0f3a42, #073039, #09313a, #0c333b, #0e343c, #1a4048, #264d54, #315a60, #3d676c);",
          backgroundSize: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div
      sx={{
        minHeight: "920", width: "80%",
        backgroundImage:
          "linear-gradient(to top, #28585c, #204e53, #17444b, #0f3a42, #073039, #09313a, #0c333b, #0e343c, #1a4048, #264d54, #315a60, #3d676c);",
      }}
    >
      <Card sx={{ width: 300, minHeight:550,margin: "auto", marginTop: "10px",  }}>
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
