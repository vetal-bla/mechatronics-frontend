import React from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import LoginImage from '../images/login_page.jpg';
import Logo from '../images/logo_mechatronics.png';
import {FirebaseAuth} from 'react-firebaseui';
import './LoginPage.css';
import {auth, uiConfig} from "../firebase/firebase";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

const LoginPage = () => (
        <div>
            <AppBar position = 'static'>
            <ToolBar>
            <Typography type="title" color="inherit">
            mechatronics
          </Typography>
            </ToolBar>
            </AppBar>
            <Grid item xs={12}>
                    <Grid>
                        <img src={LoginImage} alt="login-page"/>
                    </Grid>
                    <Grid>
                        <div className='logo row col align-items-center justify-content-center'>
                            <div className='login-logo'>
                                <img src={Logo} alt='mechatronics robot laboratory onaft'/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='number-input col '>
                                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
                            </div>
                        </div>
                    </Grid>
            </Grid>
        </div>
    )
;

export default LoginPage;
