import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import ReportLeader from './pages/Report/Leader';
import ReportCell from './pages/Report/Cell';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/report-leader" component={ReportLeader} />
                <Route path="/report-cell" component={ReportCell} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;