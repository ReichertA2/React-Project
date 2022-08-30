import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { AppContext } from "../context/AppContext";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function BookCard({ item }) {
  const { addToCart, removeFromCart, error } = useContext(AppContext);
  // const {book, _setBook} = useContext(AppContext)

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }

  if (!item) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ImageList cols={0} sx={{display:"inline-block",  overflow:"hidden"}}>
      {/* <Card  sx={{ maxWidth: 350, display:"table-cell"}}> */}
      <ImageListItem key={item.id}>
        <img
          style={{ height: 300, width: 200 }}
          src={`${item.img}`}
          srcSet={`${item.img}`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          style={{ height: 50, width: 200 }}
          title={item.title}
          subtitle={item.author}
          actionIcon={
            <>
              <Button
                style={{ fontSize: "10px" }}
                variant="outlined"
                key="add"
                onClick={() => {
                  addToCart(item);
                }}
                size="small"
              >
                Add
              </Button>
              <Button
                style={{ fontSize: "10px" }}
                variant="outlined"
                key="delete"
                onClick={() => {
                  removeFromCart(item);
                }}
                size="small"
              >
                Remove
              </Button>

              {/*                
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Read/Unread" />
                </FormGroup> */}
            </>
          }
        />
      </ImageListItem>
    </ImageList>
  );
}
