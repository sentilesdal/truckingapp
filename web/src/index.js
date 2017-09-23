import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'grommet/grommet-hpe.min.css';
// import 'grommet/grommet.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
