import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () =>(
    <BrowserRouter>
        <Navbar />        
        <Switch>
            <Route path = "/" exact>
                <Home />
            </Route>
        
            <Route path = "/search" exact>
                <Search />
            </Route>

            <Route path = "/search/:nameProfile">
                <Search />
            </Route>

        </Switch> 

    </BrowserRouter>
);

export default Routes;