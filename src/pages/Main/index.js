import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';
import jesus_salva from '../../images/jesus-salva.png'
import jesus_batiza from '../../images/jesus-batiza.png'
import jesus_cura from '../../images/jesus-cura.png'
import jesus_voltara from '../../images/jesus-voltara.png'
import galery from '../../images/gallery.jpg'
import Header from './components/Header';
// import Footer from './components/Footer';
import Routes from './routes';

function App() {
    return (
        <div className="flex-center position-ref full-height">
            <Routes />

            <Header/>
            <div className="section-home">
                <div className="d-flex justify-content-center align-items-center background">
                    <div className="row-text">
                        <h1 className="text-center p-4">Igreja do Evangelho Quadrangular</h1>
                        <span></span>
                        <p className="text-center p-4">68 anos no Brasil</p>
                    </div>
                </div>
            </div>
            <div className="section-symbols mt-5 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 symbols red">
                            <img className="img-symbols" src={jesus_salva} alt=""/>
                            <p className="text-center font-weight-bold mt-3">Jesus Salva</p>
                        </div>

                        <div className="col-lg-3 col-md-6 symbols yellow">
                            <img className="img-symbols" src={jesus_batiza} alt=""/>
                            <p className="text-center font-weight-bold mt-3">Jesus batiza</p>
                        </div>

                        <div className="col-lg-3 col-md-6 symbols blue">
                            <img className="img-symbols" src={jesus_cura} alt=""/>
                            <p className="text-center font-weight-bold mt-3">Jesus cura</p>
                        </div>

                        <div className="col-lg-3 col-md-6 symbols purple">
                            <img className="img-symbols" src={jesus_voltara} alt=""/>
                            <p className="text-center font-weight-bold mt-3">Jesus voltará</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-gallery">
                <div className="container">
                    <ul>
                        <li>
                            <img src={galery} width="210px"/>
                            <span>\o/</span>
                        </li>
                        <li>
                            <img src={galery} width="210px"/>
                            <span>XD</span>
                        </li>
                        <li>
                            <img src={galery} width="210px"/>
                            <span>o.O</span>
                        </li>
                        <li>
                            <img src={galery} width="210px"/>
                            <span>:)</span>
                        </li>
                        <li>
                            <img src={galery} width="210px"/>
                            <span>\o/</span>
                        </li>
                        <li>
                            <img src={galery} width="210px"/>
                            <span>XD</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
