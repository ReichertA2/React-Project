import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="230"
        image="https://res.cloudinary.com/dla9zwzty/image/upload/v1653508898/wizard_of_oz_gt9dfl.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          The wizard of Oz
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        L. Frank Baum
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A modern fairy tale with a distinctly American setting, a delightfully levelheaded and assertive heroine, and engaging fantasy characters, the story was enormously popular and became a classic of children’s literature. However, by the late 20th century the 1939 film The Wizard of Oz had become more familiar than the book on which it was based.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
        <Button size="small">Remove</Button>
        <Button size="small">Read</Button>
        <Button size="small">Unread</Button>
        
      </CardActions>
    </Card>
  );
}