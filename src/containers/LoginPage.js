import React from 'react'
import AppBar from 'material-ui/AppBar'
import Center from 'react-center'
import TextField from 'material-ui/TextField'

const LoginPage = () => (
    <div>
        <AppBar
            title="MECHATRONICS"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Center>
            <div className="login-wrap">
                <TextField
                    defaultValue=""
                    floatingLabelText="Phone"
                />
            </div>
        </Center>
    </div>
);

export default LoginPage;
