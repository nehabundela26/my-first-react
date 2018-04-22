import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './component/index.jsx';
import registerServiceWorker from './registerServiceWorker';
import data from './component/table/data.json';

ReactDOM.render(<Main data={data}/>, document.getElementById('root'));
registerServiceWorker();
