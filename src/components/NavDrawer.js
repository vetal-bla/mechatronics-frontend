import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router-dom';
import { Wrench, Cart, Printer3D, LibraryBooks, Clock, AccountMultiplePlus, AccountMultiple } from 'mdi-material-ui'

export const DRAWER_WIDTH = 240;

const styles = theme => ({
  menuItem: {
    '&:focus':{
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon':{
        color: theme.palette.common.white,
      },
    },
  },
  primary:{},
  icon:{},
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: DRAWER_WIDTH,
  },
  drawerHeader: theme.mixins.toolbar,
});

class NavDrawer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader} />
      <Divider />
      <MenuList>
        <Link to="/projects">
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Wrench />
            </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Projects" />
        </MenuItem>
        </Link>
        <Link to="/orders">
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Cart />
            </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Orders" />
        </MenuItem>
        </Link>
        <Link to="/prints">
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Printer3D />
            </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Prints" />
        </MenuItem>
        </Link>
        <Link to="/posts">
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <LibraryBooks />
            </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Posts" />
        </MenuItem>
        </Link>
        <Link to="/events">
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Clock />
            </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Events" />
        </MenuItem>
        </Link>
        <Link to="/newpeople">
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <AccountMultiplePlus />
            </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="New people" />
        </MenuItem>
        </Link>
        <Link to="/staff">
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <AccountMultiple/>
            </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Staff" />
        </MenuItem>
        </Link>
      </MenuList>
    </Drawer>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);