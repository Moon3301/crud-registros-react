import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Tablas from '../pages/tablas';
import Layout from '../pages/Layout';
import Badges from '../pages/Badges';
import Agregar from '../pages/agregar';
import Inicio from '../pages/inicio';
import Badges1 from '../pages/Badges1';

function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    
                    <Route exact path="/tablas" component={Tablas} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges1" component={Badges1} />
                    <Route exact path="/agregar" component={Agregar} />
                    <Route exact path="/inicio" component={Inicio} />

                    
                </Switch>

                
            </Layout>

            

        </BrowserRouter>
    );

}

export default App;