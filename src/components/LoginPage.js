import React from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import LoginImage from '../images/login_page.jpg';
import { withStyles } from 'material-ui/styles';
import Logo from '../images/logo_mechatronics.png';
import {FirebaseAuth} from 'react-firebaseui';
import './LoginPage.css';
import {auth, uiConfig} from "../firebase/firebase";

const styles = theme => ({
  root:{
    width: '100%'
  },
  centerLogin:{
    marginTop: '80px',
    height: '450px',
    width: '640px',
    backgroundColor: '#ffffff',
  },
  materialImg: {
    marginTop: '-8px',
    marginLeft: '-8px'
  },
  login: {
    height: '240px',
    backgroundColor: 'blue'
  },
  logo:{
    width: '133px',
    height: '75px',
    marginTop: '20px',
    marginBottom: '20px'
  }
});

class LoginPage extends React.Component {
  render(){
    const { classes } = this.props;
    return(
      <div>
            <AppBar position = 'static'>
            <ToolBar>
            <Typography type="title" color="inherit">
            mechatronics
          </Typography>
            </ToolBar>
            </AppBar>
            <Grid container className={classes.root}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems='center'
                  direction='row'
                  justify='center'
                >
                    <Grid item>
                      <Grid container className={classes.centerLogin}>
                        <Grid item md={5}>
                          <img src={LoginImage} alt="login-page" className={classes.materialImg}/> 
                        </Grid>
                        <Grid item md={7}>
                          <Grid container direction='column' alignItems='center'>
                            <Grid item md={2}>
                              <Grid container justify='space-around'>
                                <Grid item>
                                <img src={Logo} className={classes.logo} alt='mechatronics robot laboratory onaft'/>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item md={10}>
                              <Grid container justify='space-around'>
                                <Grid item>
                                  <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
        </div>
      )
  }
}

export default withStyles(styles)(LoginPage);
