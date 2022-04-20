import React, {useState} from 'react';
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
    // const [name, setName] = useState("")
    // const [description, setDescription] = useState("")
    // const [duration, setDuration] = useState('')
    // const [location_id, setLocationId] = useState("")
    // const [categories, setCategegories] = useState("")

    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     onAddToActivities()
    // }
    


    const initialActivityForm = {
        name: '',
        description: '',
        location_id: '',
        duration: '',
        categories:'',
        user_id: user.id 
    }

    const [activityForm, setActivityForm] = useState(initialActivityForm)

    const handleChange = (event) => {
        const {name, value} = event.target;
        // console.log(name, value)
        setActivityForm(activityForm => ({...activityForm, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(activityForm)
        const newActivity = {
            name: activityForm.name,
            description: activityForm.description,
            duration: activityForm.duration,
            location: {
                city: activityForm.location_id
            },
            categories: [
                {
                    name: activityForm.categories
                }
            ]
        }
        setActivityForm(initialActivityForm)
        onAddToActivities(newActivity)
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
                                    id="location_id"
                                    name = "location_id"
                                    value = {activityForm.location_id}
                                    onChange = {handleChange}
                                    label = "location_id"
                                    >
                                <MenuItem value="Denver">Denver</MenuItem>
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
                                <MenuItem value="Boston">Boston</MenuItem>

                                 </Select>
                                 </FormControl>
                                <FormControl variant ="standard" sx={{ m:2, minWidth: 400}}>
                                <InputLabel id="demo-simple-select-standard-label">Duration</InputLabel>
                                <Select 
                                    labelId= "demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
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
                                 </FormControl>
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