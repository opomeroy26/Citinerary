import React from 'react'

// Material UI/CSS Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function ActivityCard({ activity, category, handleDeleteActivity }) {

  function handleDelete(){
    handleDeleteActivity(activity);
  }

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
    <React.Fragment >
      <CardContent className='card'>
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
        <Typography 
        sx={{ fontSize: 11 }}
        variant="body2"
        >
          {catName}
        </Typography>
        {/* <img src={catImg} ></img> */}
      </CardContent>
      <CardActions>
        <Button onClick={() => handleDelete()} size="small">Delete</Button>
        <Button size="small">Add to My Activities</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box className="spacing"  sx={{ minWidth: 275, maxWidth:10 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default ActivityCard