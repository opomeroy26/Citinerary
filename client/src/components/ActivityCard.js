import React from 'react'

// Material UI/CSS Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';


function ActivityCard({ 
  activity, 
  category, 
  handleDeleteActivity, 
  addMyActivities, 
  setMyActivities, 
  handleShowActivities,
  faveActivities, 
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
        sx={{ fontSize: 12 }}
        variant="body2"
        >
          {activity.category_name}
        </Typography>
        {icons}
      </CardContent>



      <CardActions>
        <Button onClick={(e) => handleDelete(e)} size="small">Delete</Button>
        {/* <Button onClick={(e) => addActivity(e)} size="small">Add to My Activities</Button>
        <Button onClick={(e) => removeActivity(e)} size="small">Remove</Button> */}
        <Button onClick={activity.like === true ? (e) => removeActivity(e) : (e) => addActivity(e)} size="small">{activity.like === true ? "Remove From Saved" : "Add to Saved"}</Button>
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