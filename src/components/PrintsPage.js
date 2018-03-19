import React from 'react'
import PropTypes from 'prop-types'
import NavDrawer from './NavDrawer'
import { DRAWER_WIDTH } from './NavDrawer'
import { withStyles } from 'material-ui'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = theme => ({
	root: {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
	  },
	appFrame: {
		position: 'absolute',
		display: 'flex',
		width: '100%',
		height: '100%',
	  },
	  appBar: {
		position: 'absolute',
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
	  },
	  'appBar-left': {
		marginLeft: DRAWER_WIDTH,
	  },
	  content: {
		marginLeft: '5%',
		backgroundColor: theme.palette.background,
		width: '100%',
		padding: theme.spacing.unit * 3,
		height: 'calc(100% - 56px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
		  height: 'calc(100% - 64px)',
		  marginTop: 64,
		},
	  },
	  card:{
		  width: ''
      },
});

class PrintsPage extends React.Component{
	render(){
		const { classes } = this.props;
		return(
				<div className={classes.root}>
				<div className={classes.appFrame}>
				  <AppBar className={classes.appBar}>
					<Toolbar>
					  <Typography variant="title" color="inherit" noWrap>
						Prints
					  </Typography>
					</Toolbar>
				  </AppBar>
				  <NavDrawer />
				  <main className={classes.content}>
				  </main>
				</div>
			  </div>	
		);
	}
}
PrintsPage.propTypes = {
	classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(PrintsPage);