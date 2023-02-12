import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function BasicMenu(props) {
  console.log(props.state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
      
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{color: "white"}}
        className="btn-d"
      >
        {props.state.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {props.state.child.map((arr, index) => {
          return (
            <>
              <Link to={arr.path}>
                <MenuItem onClick={handleClose}>{arr.name}</MenuItem>
              </Link>
            </>
          );
        })}
        {/* {props.statelog.map((arrq, i) => {
          return (
            <>
              <Link to={arrq.path}>
                <MenuItem onClick={handleClose}>{arrq.name}</MenuItem>
              </Link>
             
            </>
          );
        })} */}
      </Menu>
    </div>
  );
}
