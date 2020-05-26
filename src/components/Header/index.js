import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link} from 'react-router-dom';
import '../../scss/app.scss';
import logo from '../../images/logo.png'

function Header() {
    return (
        <header id="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <BrowserRouter>
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={logo} className="logo mr-3 d-inline-block align-top" alt=""/>
                        IEQ Ayrton Senna
                    </Link>
                </BrowserRouter>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav align-items-center">
                        <BrowserRouter>
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link className="nav-item nav-link" href="#">Galeria</Link>
                            <Link className="nav-item nav-link" href="#">Célula</Link>
                            <Link className="nav-item nav-link" href="#">Cultos</Link>
                            <Link className="nav-item nav-link" href="">Cultos</Link>
                            <Link className="nav-item nav-link btn-orange" href="#">Login</Link>
                        </BrowserRouter>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
