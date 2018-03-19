import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import { Wrench, Cart, Printer3D, LibraryBooks, Clock, AccountMultiplePlus, AccountMultiple } from 'mdi-material-ui'

export const DRAWER_WIDTH = 200;

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

class NavList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <MenuList>
          <Link to='/projects' className={classes.linkDecor}>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <Wrench />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Projects" />
            </MenuItem>
          </Link>
          <Link to='/orders' className={classes.linkDecor}>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <Cart />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Orders" />
            </MenuItem>
          </Link>
          <Link to='/prints' className={classes.linkDecor}>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <Printer3D />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Prints" />
            </MenuItem>
          </Link>
          <Link to='/posts' className={classes.linkDecor}>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Posts" />
            </MenuItem>
          </Link>
          <Link to='/events' className={classes.linkDecor}>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <Clock />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Events" />
            </MenuItem>
          </Link>
          <Link to='/newpeople' className={classes.linkDecor}>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <AccountMultiplePlus />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="New people" />
            </MenuItem>
          </Link>
          <Link to='/staff' className={classes.linkDecor}>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <AccountMultiple />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Staff" />
            </MenuItem>
          </Link>
        </MenuList>
    );
  }
}

NavList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavList);