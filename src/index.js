import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginComp from './pages/login/loginComp';
import Products from './pages/products/productComp';
import Landing from './pages/landing/landing';
import ProductDetails from './pages/productDetails/productDetails';
import BookingSummary from './pages/bookingSummary/bookingSummary';
import PaymentSummary from './pages/bookingSummary/paymentSummary';
import Confirmation from './pages/confirmation/confirmation';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/login",
    element: <LoginComp />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/productdetails",
    element: <ProductDetails /> 
  },
  {
    path: "/bookingSummary",
    element: <BookingSummary /> 
  },
  {
    path: "/paymentSummary",
    element: <PaymentSummary /> 
  },
  {
    path: "/confirmation",
    element: <Confirmation /> 
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals