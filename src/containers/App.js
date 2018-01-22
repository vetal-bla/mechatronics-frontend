import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginPage from '../components/LoginPage';

//move to components
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#009688',
        accent1Color: '#FFC107',
    }
});


class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider muiTheme={muiTheme}>
              <LoginPage />
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
