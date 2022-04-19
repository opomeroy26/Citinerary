import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';

function AddActivity() {
    const [location, setLocation] = useState('')
    const [duration, setDuration] = useState('')
    const [category, setCategory] = useState('')

    function handleLocationChange(e) {
        setLocation(e.target.value)
    }
    function handleDurationChange(e){
        setDuration(e.target.value)
    }

    function handleCategoryChange(e){
        setCategory(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
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
                                     value= ""
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
                                     value = ""
                                     autoComplete="description"
                                     />
                                </Grid>
                                <Grid item xs={12}>
                                <FormControl variant ="standard" sx={{ m:2, minWidth: 400}}>
                                <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                                <Select 
                                    labelId= "demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value = {location}
                                    onChange = {handleLocationChange}
                                    label = "Location"
                                    >
                                <MenuItem value="San Francisco">San Francisco</MenuItem>
                                <MenuItem value="Denver">Denver</MenuItem>
                                 </Select>
                                 </FormControl>
                                <FormControl variant ="standard" sx={{ m:2, minWidth: 400}}>
                                <InputLabel id="demo-simple-select-standard-label">Duration</InputLabel>
                                <Select 
                                    labelId= "demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value = {duration}
                                    onChange={handleDurationChange}
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
                                    value = {category}
                                    onChange = {handleCategoryChange}
                                    label = "Category"
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
                                <Button>
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