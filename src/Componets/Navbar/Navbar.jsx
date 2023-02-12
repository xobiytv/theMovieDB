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
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {Link } from 'react-router-dom'
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import './navbar.css'
import MenuBar from "./ManuBar"
// import { color } fro<input dir="auto" id="inner_search_v4" name="query" type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person......" value="">m "@mui/system";

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

function ResponsiveAppBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

 
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

            <Box
              className="nav-i d-flex justify-content-around align-items-center text-decoration-none"
              sx={{ flexGrow: 0 }}
            >
              {/* {log}  */}
              {/* <MenuBar statelog={log} /> */}
              {/* <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip> */}

              {["bottom"].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Body>
                        Can't find a movie or TV show? Login to create it.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary">
                    <AddRoundedIcon />
                  </Button>
                </OverlayTrigger>
              ))}
              {["bottom"].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Body>
                        Can't find a movie or TV show? Login to create it.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary">UZ</Button>
                </OverlayTrigger>
              ))}

              <ul className="nav-i d-flex align-content-center justify-content-around text-decoration-none ">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/logup">Join TMDB</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
