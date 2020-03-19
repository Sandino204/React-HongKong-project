import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent.js';
import Header from './HeaderComponent'
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Route, Switch, Redirect } from 'react-router-dom'


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES
    };
  }

  render() {

    const HomePage = () => {
      return(
        <Home></Home>
      )
    }

    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() =>  <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" /> 
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;