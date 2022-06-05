import * as React from 'react';
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

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';

export default function BookCard() {
    const {books, error} = useBookCard();

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
    

    // return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//                 component="img"
//                 height="230"
//                 image="https://res.cloudinary.com/dla9zwzty/image/upload/v1653508898/wizard_of_oz_gt9dfl.jpg"
//                 alt="green iguana"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h4" component="div">
//                     The Wonderful Wizard of Oz
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                     L. Frank Baum
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     A modern fairy tale with a distinctly American setting, a delightfully levelheaded and assertive heroine, and engaging fantasy characters, the story was enormously popular and became a classic of children’s literature. However, by the late 20th century the 1939 film The Wizard of Oz had become more familiar than the book on which it was based.
            
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     76 pages
            
//                 </Typography>
                
                
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Add</Button>
//                 <Button size="small">Remove</Button>

//                 {/* below is the formGroup code that is here if you want to remove later */}
//                 <FormGroup>
//                     <FormControlLabel control={<Switch defaultChecked />} label="Read/Unread" />
//                 </FormGroup>

//                 {/* <Button size="small">Read</Button>
//         <Button size="small">Unread</Button> */}

//             </CardActions>
//         </Card>
//     );
// }

return (
    <ImageList cols={3}>
      
      {/* {books.map((item) => ( */}
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
                <BookmarkAddSharpIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      
      {/* } */}
    </ImageList>
  );
}