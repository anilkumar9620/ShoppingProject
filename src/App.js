import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Shopping from './containers/Shopping/Shopping';
import { Route } from 'react-router-dom';
import Restaurant1 from './components/Restaurants/Restaurant1';
import Restaurant2 from './components/Restaurants/Restaurant2';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';


import Logout from './containers/Auth/Logout/Logout';


import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Route path='/' exact component={Shopping} />
          <Route path='/auth' component={Auth} />
          <Route path='/rest1' component={Restaurant1} />
          <Route path='/rest2' component={Restaurant2} />
          <Route path='/cart' component={ShoppingCart} />
          <Route path='/logout' component={Logout} />
        </Layout>
      </div>
    );
  }
}

export default App;
