import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashbord from './Component/Dashbord/Dashboard';
import Barcode2 from './Component/Barcode/Barcode2';
import Header from './Component/Header/Header';
import Layout from './Component/Layout/Layout';
import Spots from './Component/Spots/Spots';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
