import React, {useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function EditProfile({user, onUpdateUser}) {
    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState()
    const [age, setAge] = useState(user.age)
    const [profile_picture, setProfilePic] = useState(user.profile_picture)


    function handleSubmit(event){
        // event.preventDefault();
        // commented it out it pushes to profile page but re-freshes page briefly
        //Take out preventDefault to push user directly back to home page after edit
        console.log(username, password, age, profile_picture)
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
                    id= "box"
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
                                    //  id = "username"
                                    id = "box2"
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
                                //  id = "password"
                                id = "box2"
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
                                // id = "age"
                                id = "box2"
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
                                    // id = "profile_picture"
                                    id = "box2"
                                    label = "Profile Picture"
                                    name= "profile_picture"
                                    value = {profile_picture}
                                    onChange = {(e) => setProfilePic(e.target.value)}
                                    autoComplete="profile_picture"

                                />
                                </Grid>
                                <Button
                                    id = "box2"
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