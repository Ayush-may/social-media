import React from 'react';
import ReactDOM from 'react-dom/client';

// jsx
import Login from './components/Login/Login.jsx';
import Routes from "./Rotues.jsx";

// css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<Login />*/}
        <Routes/>
    </React.StrictMode>,
)
