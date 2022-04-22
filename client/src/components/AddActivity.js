import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { InputLabel, listItemSecondaryActionClasses } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import { getFormControlUnstyledUtilityClasses } from '@mui/base';

function AddActivity({activities, setActivities, onAddToActivities, user}) {
    const [locations, setLocations] = useState([])

    const history = useHistory()

    
    useEffect(() => {
        fetch('http://localhost:3000/locations')
        .then(response => response.json())
        .then((locations)=> setLocations(locations))
    }, [])


    const locationId = locations.map(lo => lo.id)
    const locationCity = locations.map(lo => lo.city)


    const initialActivityForm = {
        name: '',
        description: '',
        location_id: '',
        duration: '',
        category_name:'',
        // category_icon:'',
        user_id: user.id 
    }

    const [activityForm, setActivityForm] = useState(initialActivityForm)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setActivityForm(activityForm => ({...activityForm, [name]: value}))
    }


    function handleSubmit(e){
        e.preventDefault()
        const newActivity = {

            name: activityForm.name,
            duration: activityForm.duration,
            description: activityForm.description,
            user_id:user.id,
            location_id: activityForm.location_id,
            category_name: activityForm.category_name,
            // category_icon: 
        }
        fetch('http://localhost:3000/activities', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newActivity)
        })
        .then((resp) => resp.json())
        .then((data)=> onAddToActivities(data) )
        .then(setActivityForm(initialActivityForm))
        .then(history.push("/home"))
    }



  return (
    <div>
                <Container component="main" maxWidth='xs'>
                    <Box id= "box"
                    sx={{
                        marginTop: 8,
                        display: 'flex',
            
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Typography  component="h1" variant="h5">
                        Add an Activity!
                    </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit = {handleSubmit} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                     required 
                                     fullWidth
                                     id = "box2"
                                     label = "Activity Name"
                                     name= "name"
                                     value= {activityForm.name}
                                     onChange = {handleChange}
                                     autoComplete="name"
                                     />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                     required 
                                     fullWidth
                                     id = "box2"
                                     label = "Description"
                                     name= "description"
                                     value = {activityForm.description}
                                     onChange= {handleChange}
                                     autoComplete="description"
                                     />
                                </Grid>
                                <Grid item xs={12}>
                                <FormControl variant ="standard" sx={{ m:2, minWidth: 400}}>
                                <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                                <Select 
                                    labelId= "demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    name = "location_id"
                                    value = {activityForm.location_id}
                                    onChange = {handleChange}
                                    label = "Location_Id"
                                    >

                                <MenuItem value={locationId[0]}>{locationCity[0]}</MenuItem>
                                <MenuItem value={locationId[1]}>{locationCity[1]}</MenuItem>
                                <MenuItem value={locationId[3]}>{locationCity[2]}</MenuItem>
                                <MenuItem value={locationId[4]}>{locationCity[3]}</MenuItem>
                                <MenuItem value={locationId[5]}>{locationCity[4]}</MenuItem>
                                <MenuItem value={locationId[6]}>{locationCity[5]}</MenuItem>
                                <MenuItem value={locationId[7]}>{locationCity[6]}</MenuItem>
                                <MenuItem value={locationId[8]}>{locationCity[7]}</MenuItem>
                                <MenuItem value={locationId[9]}>{locationCity[8]}</MenuItem>
                                <MenuItem value={locationId[10]}>{locationCity[9]}</MenuItem>
                                <MenuItem value={locationId[11]}>{locationCity[10]}</MenuItem>
                                <MenuItem value={locationId[12]}>{locationCity[11]}</MenuItem>
                                <MenuItem value={locationId[13]}>{locationCity[12]}</MenuItem>
                                <MenuItem value={locationId[14]}>{locationCity[13]}</MenuItem>
                                <MenuItem value={locationId[15]}>{locationCity[14]}</MenuItem>
                                <MenuItem value={locationId[16]}>{locationCity[15]}</MenuItem>
                                <MenuItem value={locationId[17]}>{locationCity[16]}</MenuItem> 

                                 </Select>
                                 </FormControl>
                                <FormControl variant ="standard" sx={{ m:2, minWidth: 400}}>
                                <InputLabel id="demo-simple-select-standard-label">Duration</InputLabel>
                                <Select 
                                    labelId= "demo-simple-select-standard-label"
                                    // id="demo-simple-select-standard"
                                    name= "duration"
                                    value = {activityForm.duration}
                                    onChange={handleChange}
                                    label = "Duration"
                                    >
                                <MenuItem value={30}>30 min or less</MenuItem>
                                <MenuItem value={60}>60 min</MenuItem>
                                <MenuItem value={90}>90 min</MenuItem>
                                <MenuItem value={120}>120 min or more</MenuItem>
                                 </Select>
                                 </FormControl>
                                 <FormControl variant ="standard" sx={{ m:2, minWidth: 400}}>
                                <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                                <Select 
                                    labelId= "demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    name = "category_name"
                                    value = {activityForm.category_name}
                                    onChange = {handleChange}
                                    label = "Categories_Name"
                                    >
                                <MenuItem value="Outdoors">Outdoors</MenuItem>
                                <MenuItem value="Date">Date</MenuItem>
                                <MenuItem value="Solo">Solo</MenuItem>
                                <MenuItem value="Friend-Activity">Friend-Activity</MenuItem>
                                <MenuItem value="Indoors">Indoors</MenuItem>
                                <MenuItem value="Food">Food</MenuItem>
                                 </Select>
                                 </FormControl>
                                </Grid>
                                <Button
                                id = "box2"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>
                                    Add Activity
                                </Button>
                            </Grid>
                        </Box>
                        </Box>
                </Container>
        </div>

  )
}

export default AddActivity