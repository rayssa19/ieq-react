import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
// import '../../scss/app.scss';

function Cell() {
    return (
        <div>
            <Header/>
            <div className="flex-center position-ref full-height">
                <div className="section-register">
                    <div className="d-flex justify-content-center">
                        Cadastro de Célula
                    </div>
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
                                <label htmlFor="name">Ofertas:</label>
                                <input type="name" className="form-control" name="ofertas" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Início:</label>
                                <input type="name" className="form-control" name="inicio" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Término:</label>
                                <input type="name" className="form-control" name="termino" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Nº de membros:</label>
                                <input type="name" className="form-control" name="membros" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Nº de visitantes:</label>
                                <input type="name" className="form-control" name="visitantes" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Total:</label>
                                <input type="name" className="form-control" name="total" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Decisões:</label>
                                <input type="name" className="form-control" name="decisoes" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Testemunhos:</label>
                                <input type="name" className="form-control" name="testemunhos" placeholder=""/>
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

export default Cell;













