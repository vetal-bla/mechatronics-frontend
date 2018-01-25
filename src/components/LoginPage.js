import React from 'react'
import AppBar from 'material-ui/AppBar'
import Center from 'react-center'
import LoginImage from '../images/login_page.jpg'
import Logo from '../images/logo_mechatronics.png'
import {FirebaseAuth} from 'react-firebaseui'
import './LoginPage.css'
import {auth, uiConfig} from "../firebase/firebase";


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
                                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Center>
        </div>
    )
;

export default LoginPage;
