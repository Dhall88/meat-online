import React, { useContext, useState, useEffect } from "react";
import { HashRouter, NavLink, Route } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap'
import Home from './views/home';
import Wholesale from './views/wholesale';
import Products from './views/products';
import Cart from './views/cart';
import About from './views/about';
import ProductView from './views/productView';
import Payment from './views/payment'
import "./App.css";
import { ActiveProductContext } from "./context/activeProductContext";

const App = () => {

  const [category, setCategory] = useState('')
  const [activeProductState, activeProductDispatch] = useContext(ActiveProductContext);
  const [isLoad, setLoad] = useState(false);

  // console.log(activeProductState.activeProduct.name)




	return (
		<>

        <h1>Virgia Meats</h1>
          <HashRouter>
            <header>
              <nav>
                <NavLink
                  className='navlink'
                  exact
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className='navlink'
                  exact
                  to="/wholesale"
                >
                  Wholesale
                </NavLink>
                <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/steak" onClick = {() => setCategory("steak")}>Steak

    </Dropdown.Item>
    <Dropdown.Item href="#/hotdog" onClick ={() => setCategory("hotdog")}>Hotdog</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

                <NavLink
                  className='navlink'
                  exact
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                  className='navlink'
                exact
                to="/cart"
                >
                Cart
                </NavLink>
              </nav>
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/wholesale" exact component={Wholesale} />
            <Route path= {`/${category}`} exact component={() => Products(category)} />
            <Route path="/about" exact component={About}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path= {`/${category}/${activeProductState.activeProduct.name}`} exact component={() => ProductView(activeProductState.activeProduct)} />
            <Route path="/payment" exact component={Payment} />

        </HashRouter>
        <footer>
              <h2>Facebook</h2>
              <h2>Linked In</h2>
              <h2>Contact Us</h2>
          </footer>
          </>
	);
}

export default App;