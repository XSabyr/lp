import React from 'react';

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import MenuAppBar from './MenuAppBar';
import MenuDrawer from './MenuDrawer';

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

function Menu({ window, children }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAppBar handleDrawerToggle={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <MenuDrawer
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

Menu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Menu;
