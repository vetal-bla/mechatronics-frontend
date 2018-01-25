import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginPage from '../components/LoginPage';
import NotFound from '../components/NotFound'
import {Route, Switch} from 'react-router-dom';

//move to components
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#009688',
        accent1Color: '#FFC107',
    }
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
                <MuiThemeProvider muiTheme={muiTheme}>
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
