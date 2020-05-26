import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';
import Routes from './routes';

function App() {
    return (
        <div className="flex-center position-ref full-height">
            <Routes />
        </div>
    );
}

export default App;
