import React from 'react';
import AppBar from '@mui/material/AppBar';
import { useHistory } from 'react-router-dom';
// MUI imports
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Toolbar, IconButton, Typography, Menu, Button, Tooltip, MenuItem, Avatar, Container } from '@mui/material';

function Header({user, setUser}) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const history = useHistory();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenuHome = () => {
    setAnchorElNav(null);
    history.push("/home")
  };

  const handleCloseNavMenuActivity = () => {
    setAnchorElNav(null);
    history.push("/addActivity")
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenuProfile= () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenuProfilePage = () => {
    setAnchorElUser(null);
    history.push("/profile")
  };

  function handleLogoutClick() {
    fetch ("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <AppBar class="header" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img id="logo" src={require ('../Citinerary-logos_black.png')} alt="logo"/>
          <Typography
            variant="h3"
            noWrap
            id= "header_font"
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Citinerary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key="home" onClick={handleCloseNavMenuHome}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem key="activity" onClick={handleCloseNavMenuActivity}>
                 <Typography textAlign="center">Add Activity</Typography>
               </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="div"
            id= "header_font"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Citinerary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="home"
                onClick={handleCloseNavMenuHome}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Home
              </Button>
              <Button
              key="addActivity"
              onClick={handleCloseNavMenuActivity}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Add Activity
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile Options">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.username} src={user.profile_picture} />
              </IconButton>
            </Tooltip>
            <Typography
            variant="p"
            noWrap
            component="div"
            id = "header_font"
          >
            Welcome {user.username}!
          </Typography>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenuProfile}
            >
                <MenuItem key="profile" onClick={handleCloseUserMenuProfilePage}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key="logout" onClick={handleLogoutClick}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
