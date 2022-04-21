import React, {useState, useEffect} from 'react';
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
    const [locations, setLocations] = useState("")

    // const LocationList = () => ( locations.map(loc => <MenuItem value={loc.id}>{loc.city}</MenuItem>))



    useEffect(() => {
        fetch('http://localhost:3000/locations')
        .then(response => response.json())
        .then(locations => setLocations(locations))
    }, [])

    //  const locationId = () => (
    //     locations.map((loc) => loc.id)
    // )

    // const locationCity = () => (
    //     locations.map((loc) => loc.city)
    // )

    // const lid = locations.map(lo => lo.id)
    // const lcity= locations.map(lo => lo.city)


    const initialActivityForm = {
        name: '',
        description: '',
        location_id: '',
        duration: '',
        // categories:'',
        user_id: user.id 
    }

    const [activityForm, setActivityForm] = useState(initialActivityForm)

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        setActivityForm(activityForm => ({...activityForm, [name]: value}))
    }

    // console.log(activityForm)

    function handleSubmit(e){
        e.preventDefault()
        console.log(activityForm)
        const newActivity = {

            name: activityForm.name,
            duration: activityForm.duration,
            description: activityForm.description,
            user_id:user.id,
            location_id: activityForm.location_id
        }
        fetch('http://localhost:3000/activities', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newActivity)
        })
        .then(setActivityForm(initialActivityForm))
        .then(onAddToActivities(newActivity))
        .then(console.log(newActivity))
    }

  



  return (
    <div>
                <Container component="main" maxWidth='xs'>
                    <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Typography component="h1" variant="h5">
                        Add a Personalized Activity
                    </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit = {handleSubmit} >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                     required 
                                     fullWidth
                                     id = "name"
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
                                     id = "description"
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
                                    label = "Location_id"
                                    >
                                    {/* <LocationList /> */}

                                    <MenuItem value={85}>Denver</MenuItem>
                                    <MenuItem value={86}>San Francisco</MenuItem>
                                    <MenuItem value={87}>Seattle</MenuItem>
                                    <MenuItem value={88}>Los Angeles</MenuItem>
                                    <MenuItem value={89}>Austin</MenuItem>
                                    <MenuItem value={90}>New York City</MenuItem>
                                    <MenuItem value={91}>Chicago</MenuItem>
                                    <MenuItem value={92}>Houston</MenuItem>
                                    <MenuItem value={93}>Boulder</MenuItem>
                                    <MenuItem value={94}>New Orleans</MenuItem>
                                    <MenuItem value={95}>San Diego</MenuItem>
                                    <MenuItem value={96}>Phoenix</MenuItem>
                                    <MenuItem value={97}>Dallas</MenuItem>
                                    <MenuItem value={98}>Philadelphia</MenuItem>
                                    <MenuItem value={99}>Miami</MenuItem>
                                    <MenuItem value={100}>Atlanta</MenuItem>
                                    <MenuItem value={101}>Portland</MenuItem>
                                    <MenuItem value={102}>Boston</MenuItem>

                                {/* <MenuItem value={locationId.id}>{locationCity.city}</MenuItem>
                                <MenuItem value="San Francisco">San Francisco</MenuItem>
                                <MenuItem value="Seattle">Seattle</MenuItem>
                                <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                                <MenuItem value="Austin">Austin</MenuItem>
                                <MenuItem value="New York City">New York City</MenuItem>
                                <MenuItem value="Chicago">Chicago</MenuItem>
                                <MenuItem value="Houston">Houston</MenuItem>
                                <MenuItem value="Boulder">Boulder</MenuItem>
                                <MenuItem value="New Orleans">New Orleans</MenuItem>
                                <MenuItem value="San Diego">San Diego</MenuItem>
                                <MenuItem value="Phoenix">Phoenix</MenuItem>
                                <MenuItem value="Dallas">Dallas</MenuItem>
                                <MenuItem value="Philadelphia">Philadelphia</MenuItem>
                                <MenuItem value="Miami">Miami</MenuItem>
                                <MenuItem value="Atlanta">Atlanta</MenuItem>
                                <MenuItem value="Portland">Portland</MenuItem>
                                <MenuItem value="Boston">Boston</MenuItem>  */}

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
                                 {/* <FormControl variant ="standard" sx={{ m:2, minWidth: 400}}>
                                <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                                <Select 
                                    labelId= "demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    name = "categories"
                                    value = {activityForm.categories}
                                    onChange = {handleChange}
                                    label = "Categories"
                                    >
                                <MenuItem value="Outdoors">Outdoors</MenuItem>
                                <MenuItem value="Date">Date</MenuItem>
                                <MenuItem value="Solo">Solo</MenuItem>
                                <MenuItem value="Friend-Activity">Friend-Activity</MenuItem>
                                <MenuItem value="Indoors">Indoors</MenuItem>
                                <MenuItem value="Food">Food</MenuItem>
                                 </Select>
                                 </FormControl> */}
                                </Grid>
                                <Button
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