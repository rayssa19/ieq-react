import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
// import '../../scss/app.scss';

function Leader() {
    return (
        <div>
            <Header/>
            <div className="flex-center position-ref full-height">
                <div className="section-register">
                    <div className="container">
                        {/*if*/}
                        {/*<div className="alert alert-success alert-dismissible">*/}
                        {/*    <a href="#" className="close"*/}
                        {/*       data-dismiss="alert"*/}
                        {/*       aria-label="close">&times;</a>*/}
                        {/*</div>*/}
                        {/*termina if*/}

                        <form className="form-register" name="form-register" method="post" action="">
                            <div className="form-group">
                                <label htmlFor="name">Célula:</label>
                                <input type="name" className="form-control" name="cell" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Líder:</label>
                                <input type="name" className="form-control" name="name" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Timóteo:</label>
                                <input type="name" className="form-control" name="viceleader" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Anfitriã(o):</label>
                                <input type="name" className="form-control" name="host" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Secretário(a):</label>
                                <input type="name" className="form-control" name="secretary" placeholder=""/>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-black mb-2">Cadastrar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Leader;













