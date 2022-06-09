import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Error from './Error';
import { CircularProgress } from '@mui/material';
import useBookCard from '../hooks/useBookCard';




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
       
        </Card>
        
    );
}