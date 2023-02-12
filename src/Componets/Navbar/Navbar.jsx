import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import './navbar.css'
// import { Link } from "@mui/material";
import MenuBar from "./ManuBar"
// import movie from '../Movies/Movies'

const pages = [
  {
    name: "Mivies",
    child: [
      {
        name: "Popular",
        path: "/movie",
      },
      {
        name: "Now Playing",
        path: "/now-playing",
      },
      {
        name: "Upcoing",
        path: "/upcoing",
      },
      {
        name: "Top Rated",
        path: "/top-rated",
      },
    ],
  },
  {
    name: "TV shows",
    child: [
      {
        name: "Popular",
        path: "/tv-movie",
      },
      {
        name: "Now Playing",
        path: "/tv-now-playing",
      },
      {
        name: "Upcoing",
        path: "/tv-upcoing",
      },
      {
        name: "Top Rated",
        path: "/tv-top-rated",
      },
    ],
  },
  {
    name: "People",
    child: [{ name: "Popular People", path: "/people" }],
  },
  {
    name: "More",
    child: [
      { name: "Discussions", path: "/discuss" },
      { name: "Leaderbord", path: "/leaderbord" },
      { name: "Support", path: "/talk" },
      { name: "API", path: "/api" },
    ],
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];
// const log = [
//   {
//     name: "+",
//     path: '/upcomimt#'
//   },
//    {
//     name: "uz",
//     child: [
//       { name: "ru", path: "/ru" },
//       { name: "eng", path: "/eng" },
      
//     ],
//   },
//     {
//     name: "LogIn",
//     path: '/login'
//   },
//     {
//     name: "SoginUp",
//     path: '/soginup'
//   },
// ];
// const pages = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar className="appBar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
            width={150}
          />

          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <MenuBar state={page} />
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* {log}  */}
            {/* <MenuBar statelog={log} /> */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      </AppBar>

      
    </div>
    
  );
}
export default ResponsiveAppBar;
