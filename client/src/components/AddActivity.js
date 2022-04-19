import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function AddActivity() {
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
                        <Box component="form" noValidate sx={{ mt: 3 }} >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                     required 
                                     fullWidth
                                     id = "username"
                                     label = "Username"
                                     name= "username"
                                     value= ""
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
                                     value = ""
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
                                     value = ""
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
                                     value = ""
                                     autoComplete="profile_picture"

                                     />
                                </Grid>
                                <Button
                                    type = "submit"
                                    fullWidth
                                    variant="contained"
                                    sx={ { mt: 3, mb: 2}}>
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