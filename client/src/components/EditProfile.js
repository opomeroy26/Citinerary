import React, {useState} from 'react';
//MUI imports
import { Button, TextField, Grid, Box, Typography, Container } from '@mui/material';

function EditProfile({user, onUpdateUser}) {
    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState()
    const [age, setAge] = useState(user.age)
    const [profile_picture, setProfilePic] = useState(user.profile_picture)


    function handleSubmit(event){
        // event.preventDefault(); //commented out so it will push to profile page, but re-freshes page briefly
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password, age, profile_picture})
        })
        .then(resp => resp.json())
        .then(updatedUser => {
            onUpdateUser(updatedUser)
        })
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
                        Edit Your Profile
                    </Typography>
                        <Box component="form" noValidate onSubmit= {handleSubmit} sx={{ mt: 3 }} >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                     required 
                                     fullWidth
                                     id = "username"
                                     label = "Username"
                                     name= "username"
                                     value= {username}
                                     onChange = {(e) => setUsername(e.target.value)}
                                     autoComplete="username"
                                     />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                     required 
                                     fullWidth
                                     id = "password"
                                     label = "Password"
                                     name= "password"
                                     value = {password}
                                     onChange = {(e) => setPassword(e.target.value.replace(/[^A-Za-z]/g, "*"))}
                                     autoComplete="password"
                                     />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                     required 
                                     fullWidth
                                     id = "age"
                                     label = "Age"
                                     name= "age"
                                     value = {age}
                                     onChange = {(e) => setAge(e.target.value)}
                                     autoComplete="age"
                                     />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                     required 
                                     fullWidth
                                     id = "profile_picture"
                                     label = "Profile Picture"
                                     name= "profile_picture"
                                     value = {profile_picture}
                                     onChange = {(e) => setProfilePic(e.target.value)}
                                     autoComplete="profile_picture"

                                     />
                                </Grid>
                                <Button
                                    type = "submit"
                                    fullWidth
                                    variant="contained"
                                    sx={ { mt: 3, mb: 2}}>
                                    Update Profile
                                </Button>
                            </Grid>
                        </Box>
                        </Box>
                </Container>
        </div>
    )
}

export default EditProfile;