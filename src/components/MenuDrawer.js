import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const drawerUnauthorisedList = [
  {
    index: 1,
    text: 'All Courses',
    to: '/courses',
  },
  {
    index: 2,
    text: 'The most popular courses',
    to: '/courses/top',
  },
  {
    index: 3,
    text: 'Editors choice',
    to: '/courses/editors',
  },
];

const drawerAuthorisedList = [
  {
    index: 1,
    text: 'Started Courses',
    to: '/courses/started',
  },
  {
    index: 2,
    text: 'My courses',
    to: '/courses/creator',
  },
  {
    index: 3,
    text: 'Account Settings',
    to: '/account/settings',
  },
  {
    index: 4,
    text: 'Create new course',
    to: '/account/createcourse',
  },
];

const drawerPart = (items, classes) => {
  return items ? (
    <div>
      <Divider />
      <List>
        {items.map(({ text, index, to }) => (
          <Link key={index} to={{ pathname: to }} className={classes.link}>
            <ListItem button>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  ) : null;
};

const MenuDrawer = ({ container, mobileOpen, handleDrawerToggle, userEmail, sections }) => {
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {drawerPart(sections, classes)}
      {drawerPart(drawerUnauthorisedList, classes)}
      {userEmail && drawerPart(drawerAuthorisedList, classes)}
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
    sections: state.section.sections,
  };
}

export default connect(mapStateToProps)(MenuDrawer);
