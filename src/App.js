import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Shopping from './containers/Shopping/Shopping';
import { Route } from 'react-router-dom';
import Restaurant1 from './components/Restaurants/Restaurants';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Route path='/' exact component={Shopping} />
          <Route path='/rest1' component={Restaurant1} />
        </Layout>
      </div>
    );
  }
}

export default App;
