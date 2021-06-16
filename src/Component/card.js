import React from 'react';
import { Typography,Card,CardActions,CardContent,Button,CardMedia,makeStyles} from '@material-ui/core/'

import './card.css';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const Cards = ({id,image, first, last, email }) => {
    const classes = useStyles();
     
   
    return (
      <Card  key={id}  className='card-container' variant="outlined">
          <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
          />
         <CardContent  >
            <div className='contain-fullname' >
               <Typography gutterBottom variant="h6" >{first}</Typography>
                <Typography gutterBottom variant="h6" >{last} </Typography>
              </div>
              <Typography  variant="h6" >
              {email}       
              </Typography>
          </CardContent>
       </Card>             
   )
}


export default Cards;

