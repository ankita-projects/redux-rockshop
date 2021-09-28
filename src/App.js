import React, { useEffect } from "react";
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./hocs/Layout";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./style/main.scss";
import { initializeProducts } from "./store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

 return (
  <Router>
      <Navbar/>
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route exact path="/product" component = {Product} />
      <Route exact path="/cart" component = {Cart} />
      </Switch>
    <Footer/>
  </Router>
 );
}

export default App;
