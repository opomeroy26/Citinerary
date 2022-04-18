import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function EditProfile({user}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState()
    const [profile_picture, setProfilePic] = useState("")

    function handleSubmit(event){
        event.prevent.default();
        console.log({username, password, age, profile_picture})
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
                        <Box componenet="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
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
                                     onChange = {(e) => setPassword(e.target.value)}
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
                                <Button>
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