import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import MenuAppBar from './MenuAppBar';
import MenuDrawer from './MenuDrawer';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Main from './Main';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function WebSite({ window, userEmail }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin">{userEmail ? <Redirect to="/courses" /> : <SignIn />}</Route>
        <>
          <div className={classes.root}>
            <CssBaseline />
            <MenuAppBar handleDrawerToggle={handleDrawerToggle} />
            <MenuDrawer
              container={container}
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
            <Main />
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
}

WebSite.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
  };
}

export default connect(mapStateToProps)(WebSite);
