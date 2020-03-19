import React, { Component } from 'react';
import Homepage from './Homepage/Homepage';
import All from './All/All';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
    render() {
      return (
          <Router>
	          <Switch>    
		          <div>
		              <Route path="/" exact component={Homepage}/>
		              <Route path="/all" component={All}/>
		              <Route path="/contact" component={Contact}/>
		          </div>
	          </Switch>
          </Router>
      );
    }
  }
  
  export default App;