import React from "react";
import './App.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./style/main.scss";


function App() {
 return (
  <Router>
      <Navbar/>
    <Layout>
      <Route exact path="/" component = {Home} />
      <Route exact path="/products" component = {Product} />
      <Route exact path="/cart" component = {Cart} />
    </Layout>
    <Footer/>
  </Router>
 );
}

export default App;
