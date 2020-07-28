// react components:
import React from 'react';
import { Component } from 'react';
// getting regular js script file. But it probably could go into the index.html file...
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// custom components
import Routes from './Constants/Routes'
import Dashboard from './Screens/Dashboard';
import BlogPosts from './Screens/BlogPosts'

import Icons from './Screens/Icons'
import DetailScreen from './Screens/DetailScreen';
import NavBar from './Components/Shared/Navbar';
import myFunction from './Scripts/JS/script';
import Header from './Components/Shared/Header'
import Contact from './Screens/Contact'


class App extends Component {
  
  state = {  }

  componentDidMount() {
    // this.alertMe();
  }

  alertMe = () => {
    myFunction();
  }
  
  render() {
    return (
      <BrowserRouter>
        {/* <div className="wrapper"> */}
        <Switch>
          <Route exact path={'/'} component={Dashboard} />
          <Route exact path={'/posts'} component={ BlogPosts } />
          <Route exact path={'/details/:id'} component={DetailScreen}/>
          <Route exact path={'/contact'} component={Contact}/>
        </Switch>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

export default App;