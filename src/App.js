import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent'
import './App.css';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Main></Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
