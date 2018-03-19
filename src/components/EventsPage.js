import React from 'react'
import PropTypes from 'prop-types'
import NavDrawer from './NavDrawer'
import { DRAWER_WIDTH } from './NavDrawer'
import { withStyles } from 'material-ui'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import { auth } from '../firebase/firebase';

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
		marginLeft: '10%',
		backgroundColor: theme.palette.background,
		width: '60%',
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
			button: {
				margin: 0,
				top: 'auto',
				right: 20,
				bottom: 20,
				left: 'auto',
				position: 'fixed',
		},
		event:{
			marginLeft: '15%',
			height: '125px',
			display: 'block'
	},
});

class EventsPage extends React.Component{
	state = {display: 'block', secdis: 'none'}
	toggle= () =>{
		console.log(this.state);
		this.setState({display: 'none'})
		this.setState({secdis: 'block'})
	}
	render(){
		const { classes } = this.props;
		return(
				<div className={classes.root}>
				<div className={classes.appFrame}>
				  <AppBar className={classes.appBar}>
					<Toolbar>
					  <Typography variant="title" color="inherit" noWrap>
						Events
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
EventsPage.propTypes = {
	classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(EventsPage);