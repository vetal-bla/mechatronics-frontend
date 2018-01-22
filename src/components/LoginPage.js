import React from 'react'
import AppBar from 'material-ui/AppBar'
import Center from 'react-center'
import TextField from 'material-ui/TextField'
import LoginImage from '../images/login_page.jpg'
import Logo from '../images/logo_mechatronics.png'
import PhoneIcon from 'material-ui-icons/Phone'
import LoginButton from 'material-ui/RaisedButton'
import './LoginPage.css'

const buttonStyle = {
    margin: '0 20px 20px 0',
    position: 'absolute',
    bottom: 0,
    right: 0
};

const LoginPage = () => (
        <div>
            <AppBar
                title="MECHATRONICS"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Center className="center row align-items-center justify-content-center">
                <div className='row'>
                    <div className="login-page-image col-md-5 d-none d-lg-block"><img src={LoginImage}
                                                                                      alt="login-page"/></div>
                    <div className="login-wrap col-md-7">
                        <div className='logo row col align-items-center justify-content-center'>
                            <div className='login-logo'>
                                <img src={Logo} alt='mechatronics robot laboratory onaft'/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='number-input col '>
                                <div className='phone-icon'>
                                    <PhoneIcon style={{marginBottom: -7, marginRight: 5}}/>
                                    <TextField
                                        defaultValue=""
                                        floatingLabelText="Phone"
                                    />
                                </div>
                            </div>
                        </div>
                        <LoginButton
                            backgroundColor="#FFC107"
                            label='login'
                            secondary={true}
                            style={buttonStyle}
                            className='float-right align-bottom'
                        />
                    </div>
                </div>
            </Center>
        </div>
    )
;

export default LoginPage;
