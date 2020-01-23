import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
/*
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
*/
function Header() {
  //const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Welcome</Typography>
        <Button
          component={Link}
          variant="contained"
          color="primary"
          to="/pagetwo"
        >
          Page Two
        </Button>
        <Button component={Link} variant="contained" color="primary" to="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
