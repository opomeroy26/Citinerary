import React from 'react';
// Material UI/CSS Imports
import {Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';


function ActivityCard({ 
  activity, 
  handleDeleteActivity, 
  addMyActivities, 
  handleShowActivities,
  handleRemoveMyActivities
  }) {

  function handleDelete(e){
    e.stopPropagation()
    handleDeleteActivity(activity);
  }

  function addActivity(e){
    e.stopPropagation()
    if (activity.like === false ){
    activity.like = true
    addMyActivities(activity);
    }
  }

  function removeActivity(e, faveActivities){
    e.stopPropagation()
    if(activity.like === true){
      activity.like = false
      handleRemoveMyActivities(activity);
      handleShowActivities(faveActivities)
    }
  }

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const activityColors = activity.category_name === "Outdoors" ? "outdoors" : (activity.category_name === "Date" ? "date" : (activity.category_name === "Friend-Activity") ? "friend" : (activity.category_name === "Indoors") ? 'indoors' : (activity.category_name === "Solo") ? "solo" : 'card');
  const icons = (activity.category_name === "Outdoors" ? <ParkOutlinedIcon/> :  (activity.category_name === "Date" ? <FavoriteOutlinedIcon /> : (activity.category_name === "Friend-Activity") ? <WcOutlinedIcon /> : (activity.category_name === "Indoors") ? <HomeWorkOutlinedIcon /> : (activity.category_name === "Solo") ? <ManOutlinedIcon /> : <ManOutlinedIcon />))

  const card = (
    <React.Fragment>
      <CardContent 
        className={activityColors}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div" id="card_title">
          {activity.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Location {bull} {activity.location.city}
        </Typography>
        <Typography variant="body2" id = "card_description">
          Description {bull} {activity.description}
          <br />
          Duration: {activity.duration} minutes
        </Typography>
        <Typography 
        sx={{ fontSize: 12 }}
        variant="body2"
        >
          {activity.category_name}
        </Typography>
        {icons}
      </CardContent>
      <CardActions>
        <Button id="card_button" onClick={(e) => handleDelete(e)} size="small">Delete</Button>
        <Button id="card_button" onClick={activity.like === true ? (e) => removeActivity(e) : (e) => addActivity(e)} size="small">{activity.like === true ? "Remove From Saved" : "Add to Saved"}</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box className="spacing"  sx={{ minWidth: 275, maxWidth:10 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}


export default ActivityCard;