import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import LoginPage from '../components/LoginPage';
import NotFound from '../components/NotFound'
import SignUpPage from '../components/SignUpPage'
import EventsPage from '../components/EventsPage'
import PrintsPage from '../components/PrintsPage'
import PostsPage from '../components/PostsPage'
import StaffPage from '../components/StaffPage'
import {Route, Switch} from 'react-router-dom';
import ProjectsPage from '../components/ProjectsPage';
import Reboot from 'material-ui/Reboot';
import OrdersPage from '../components/OrdersPage'
import UserPage from '../components/UserPage'

//move to components
const theme = createMuiTheme({
    palette:{
        primary: {
            light: '#52c7b8',
            main: '#009688',
            dark: '#00675b',
            contrastText: '#ffffff',
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
        return (
            <div className="App">
            <Reboot/>
                <MuiThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/projects" component={ProjectsPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path='/signup' component={SignUpPage}/>
                        <Route path="/prints" component={PrintsPage}/>
                        <Route path="/posts" component={PostsPage}/>
                        <Route path="/events" component={EventsPage}/>
                        <Route path="/staff" component={StaffPage}/>
                        <Route path="/orders" component={OrdersPage}/>
                        <Route path="/user" component={UserPage}/>
                        <Route path="/" exct component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
