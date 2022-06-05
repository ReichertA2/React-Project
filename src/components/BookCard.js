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



export default function BookCard() {
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
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="230"
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
            <CardActions>
                <Button size="small">Add</Button>
                <Button size="small">Remove</Button>

                {/* below is the formGroup code that is here if you want to remove later */}
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Read/Unread" />
                </FormGroup>

                {/* <Button size="small">Read</Button>
        <Button size="small">Unread</Button> */}

            </CardActions>
        </Card>
    );
}

