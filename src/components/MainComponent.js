import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent.js';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Route, Switch, Redirect } from 'react-router-dom'
import Contact from './ContactComponent'  
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS, 
        leaders: LEADERS, 
        promotions: PROMOTIONS
    };
  }

  render() {

    const HomePage = () => {
      return(
        <Home 
          dish={this.state.dishes.filter((dish) =>  dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) =>  promo.featured)[0]}
          leader={this.state.leaders.filter((leader) =>  leader.featured)[0]}
          ></Home>
      )
    }

    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() =>  <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />   
          <Redirect to="/home" /> 
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;