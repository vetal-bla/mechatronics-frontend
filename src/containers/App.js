import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import LoginPage from '../components/LoginPage';
import NotFound from '../components/NotFound'
import {Route, Switch} from 'react-router-dom';
import Reboot from 'material-ui/Reboot';

//move to components
const theme = createMuiTheme({
    palette:{
        primary: {
            light: '#52c7b8',
            main: '#009688',
            dark: '#00675b',
            contrastText: '#000000',
        },
        secondary: {
            light: '#fff350',
            main: '#ffc107',
            dark: '#c79100',
            contrastText: '#000000',
        },
    },
});

//check


const Test = () => (
    <div>TEST!!!!</div>
);

const Home = () => (
    <div>HOME!!!!</div>
);

class App extends Component {
    render() {
        console.log('QQQQQQQQQQQQQQQq');
        return (
            <div className="App">
            <Reboot/>
                <MuiThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/test" component={Test}/>
                        <Route path="/" exct component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
