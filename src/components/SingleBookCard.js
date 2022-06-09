import React, { useContext, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Error from './Error';
import { CircularProgress } from '@mui/material';
import useBookCard from '../hooks/useBookCard';



import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';



export default function SingleBookCard() {
    const {itemId} =  useParams()
  
    const {books, error} = useBookCard(itemId);
    console.log('SingleBookCard' , books)
    
 

    if (!books) {
        console.log('no item')

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
        <Card  sx={{ maxWidth: 350}}>

        {/* <Card  sx={{ maxWidth: 350, display:"table-cell"}}> */}
            <CardMedia
                component="img"
                height="500"
                image={books.img}
                alt={books.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {books.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {books.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {books.summary}

                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {books.pages}

                </Typography>


            </CardContent>
            {/* <CardActions sx={{}}>
                <Button sx={{}} key="add" onClick={()=>{addToCart(item)}}  size="small">Add</Button>
                <Button key="delete" onClick={()=>{removeFromCart(item)}} size="small">Remove</Button> */}
                

                {/* below is the formGroup code that is here if you want to remove later */}
                {/* <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Read/Unread" />
                </FormGroup> */}

                {/* <Button size="small">Read</Button>
        <Button size="small">Unread</Button> */}

            {/* </CardActions> */}
        </Card>
        
    );
}