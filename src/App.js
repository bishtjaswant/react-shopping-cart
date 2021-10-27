import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Cart from './compoments/Cart/Cart'
import Header from './compoments/Header/Header'
import Home from './compoments/Home/Home'

export default function App() {
  return (
   
    <BrowserRouter>
         <Header/>
         <Switch>
           <Route exact path='/'> <Home/> </Route>
           <Route exact path='/cart'> <Cart/> </Route>
         </Switch>
    </BrowserRouter>

    
  )
}
