import React from 'react'
import PropTypes from 'prop-types'
import NavDrawer from './NavDrawer'
import { DRAWER_WIDTH } from './NavDrawer'
import { withStyles } from 'material-ui'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

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
      orderf:{
          display: 'inline-block',
          marginRight: '10px'
      },
      orders:{
        display: 'inline-block',
        marginRight: '0'
		},
		button: {
			margin: 0,
			top: 'auto',
			right: 20,
			bottom: 20,
			left: 'auto',
			position: 'fixed',
	},
    paper:{
			marginLeft: '10%',
			width: '650px'
		},
		textField:{
			margin: '10px'
		}  
});

class OrdersPage extends React.Component{
	render(){
		const { classes } = this.props;
		return(
				<div className={classes.root}>
				<div className={classes.appFrame}>
				  <AppBar className={classes.appBar}>
					<Toolbar>
					  <Typography variant="title" color="inherit" noWrap>
						Orders
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
OrdersPage.propTypes = {
	classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(OrdersPage);