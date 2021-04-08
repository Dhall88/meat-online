import React, { useContext, useState, useEffect } from "react";
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
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
import { SortingContext } from "./context/sortingContext"
import { CartContext } from "./context/cartContext"

const App = () => {

  const [sortingState, sortingDispatch] = useContext(SortingContext)
  const [activeProductState, activeProductDispatch] = useContext(ActiveProductContext);
  const [isLoad, setLoad] = useState(false);
  const [cartState, cartDispatch] = useContext(CartContext)

  // console.log(activeProductState.activeProduct.name)

  const cartCount = () => {
    let itemCount = 0;
    for(let i = 0; i<cartState.products.length; i++) {
      itemCount += parseInt(cartState.products[i].quantity)
    }
    return itemCount;
  }

	return (
		<>
      <style type="text/css">
    {`
    .btn-custom {
      color: #ffffff;
      padding: 1rem;
      font-size: 2rem;
      border: 0;
    }

    .btn-custom:hover {
      color: rgb(211, 212, 216);
    }

    .dropdown-menu {
      background-color: rgb(96, 128, 218);
    }

    .dropdown-item {
      color: white;
    }
    `}
  </style>

          <HashRouter>
            <header className="d-flex justify-content-between">
                <h1>Quality Local Meats</h1>
              <nav className="d-flex">
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
                  <Dropdown.Toggle variant="custom" id="dropdown-basic">
                    Products
                  </Dropdown.Toggle >

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/products/steak" onClick = {() => sortingDispatch({
                                                                                  type: "SET_CATEGORY",
                                                                                  payload: {category:"steak",
                                                                                            sorting:""}
                    })}>Steak

                    </Dropdown.Item>
                    <Dropdown.Item href="#/products/beef" onClick ={() => sortingDispatch({
                                                                type: "SET_CATEGORY",
                                                                payload: {category: "beef",
                                                                          sorting:""}
                                                                })}
                    >Hotdog</Dropdown.Item>
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
                  className='navlink cart-nav'
                exact
                to="/cart"
                >
                Cart <div className = "cart-count">{cartCount()}</div>
                </NavLink>
              </nav>
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/wholesale" exact component={Wholesale} />
            <Route path="/about" exact component={About}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/checkout" exact component={Payment} />
            <Switch>
              <Route path= {`/products/${sortingState.category}/${activeProductState.activeProduct.name}`} exact component={ProductView} />
              <Route path= {`/products/`}  component={Products} />
            </Switch>

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