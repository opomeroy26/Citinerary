// import * as React from 'react';
import React, {useState} from "react";
import SignIn from "./SignIn";
//MUI Imports
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, createTheme, ThemeProvider} from "@mui/material";

function Copyright() {
  return (
    <div id="created">
    <a href= "https://github.com/opomeroy26" target="_blank" rel="noreferrer"><GitHubIcon/> Olivia Pomeroy </a>
    <a href= "https://github.com/HannahGlazier" target="_blank" rel="noreferrer"><GitHubIcon/> Hannah Glazier </a>
    </div>
  );
}
const theme = createTheme();

export default function SignUp( {onSignIn}) {
  const [ showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onSignIn(user));
      } else {
        r.json().then(err => window.alert(err.errors))
      }
    })
  };

  return (
    <div>
      {showLogin ? (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value = {username}
                  onChange = {(e) => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={() => setShowLogin(false)}>
                  Already have an account? Sign in
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
      ) : (
        <SignIn />
      )}
    </div>
  );
}