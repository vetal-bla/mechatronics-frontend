import React from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles';
import AddAPhoto from 'material-ui-icons/AddAPhoto'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

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
  addAPhoto: {
    width: '250px',
    height: '120px'
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
  },
  textField:{
    width: '300px'
  },
  button:{
    float: 'right',
    marginTop: '45px',
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
                        <Grid item md={5} style={{backgroundColor: '#d6d6d6'}} >
                          <Grid container style={{ height: '120px', marginTop: '155px' }} alignItems='center'>
                            <Grid item md={12}>
                              <AddAPhoto className={classes.addAPhoto}/>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={7}>
                          <Grid container direction='column' alignItems='center'>
                            <Grid item md={2}>
                              <Grid container justify='center'>
                                <Grid item style={{marginTop: '20px'}}>
                                  <h1><strong>Sign Up</strong></h1>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item md={10}>
                              <Grid container direction='column' justify='center' alignItems='center'>
                                <Grid item md={12}>
                                  <form>
                                    <TextField
                                      id="name"
                                      label="Name"
                                      className={classes.textField}
                                      margin="none"
                                    />
                                    <TextField
                                      id="surname"
                                      label="Surname"
                                      className={classes.textField}
                                      margin="none"
                                    />
                                    <TextField
                                      id="middleName"
                                      label="Middle name"
                                      className={classes.textField}
                                      margin="none"
                                    />
                                    <TextField
                                      id="email"
                                      label="e-mail"
                                      className={classes.textField}
                                      margin="none"
                                    />
                                    <Button variant="raised" color="secondary" className={classes.button}>Sign Up</Button>
                                  </form>
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
