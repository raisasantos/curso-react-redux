import "./index.css"
import React from "react";

import ReactDOM from "react-dom/client"; //No React 18, a API do ReactDOM foi modificada. Basta modificar o index.js para: import ReactDOM from 'react-dom/client';

import App from './views/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
