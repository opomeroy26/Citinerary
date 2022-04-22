import React, {useState} from "react";
import SignUp from "./SignUp";
//MUI Imports
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from "@mui/material";

function Copyright() {
  return (
    <div id="created">
      <a href= "https://github.com/opomeroy26" target="_blank" rel="noreferrer"><GitHubIcon/> Olivia Pomeroy </a>
      <a href= "https://github.com/HannahGlazier" target="_blank" rel="noreferrer"><GitHubIcon/> Hannah Glazier </a>
    </div>
  );
}

const theme = createTheme();

export default function SignIn( {onSignIn} ) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showLogin, setShowLogin] = useState(true)


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onSignIn(user));
      } else {
        r.json().then((err) => window.alert(err.errors));
      }
    })
  };

  return (
    <div>
    {showLogin ? (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant= "h2"> Citinerary </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="uesrname"
                label="Username"
                name="username"
                value = {username}
                onChange ={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Button onClick={() => setShowLogin(false)}>
                    {"Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    ) : (
    <SignUp onSignIn={onSignIn} />
    )}
  </div>
  );
}