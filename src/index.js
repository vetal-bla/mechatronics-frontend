import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'normalize.css'

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root')
);
module.hot.accept();
registerServiceWorker();
