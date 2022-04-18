import React from 'react'

// Material UI/CSS Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function ActivityCard({ activity, category }) {

  const catName = category.map(cat => cat.name + " ")
  const catImg = category.map(cat => cat.category_icon)

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div">
          {activity.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Location {bull} {activity.location.city}
        </Typography>
        <Typography variant="body2">
          Description {bull} {activity.description}
          <br />
          Duration: {activity.duration} minutes
        </Typography>
        <Typography vatiant="body2">
          {catName}
        </Typography>
        {/* <img src={catImg} ></img> */}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275, maxWidth:10 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default ActivityCard