import React from 'react'
import Catalog from './Components/Catalog/Catalog'
import Cart from './Components/Cart/Cart'
import Admin from './Components/Admin/Admin'
import {Switch, Route} from 'react-router-dom'


export default (
    <Switch>
        <Route exact path='/' component={Catalog} />
        <Route path='/cart' component={Cart}/>
        <Route path='/admin' component={Admin} />
    </Switch>
)