import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from "./context/cartContext";
import { ProductContextProvider } from "./context/productContext";
import { PaginationContextProvider } from "./context/paginationContext";
import { ActiveProductContextProvider} from "./context/activeProductContext";
import { SortingContextProvider } from "./context/sortingContext";
import { UserContextProvider } from "./context/userContext"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <ProductContextProvider>
        <ActiveProductContextProvider>
          <SortingContextProvider>
            <UserContextProvider>

            <App />
            </UserContextProvider>
          </SortingContextProvider>
        </ActiveProductContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
