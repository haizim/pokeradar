import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from './Home';
import Detail from './Detail';
import Owned from './Owned';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      owned:[],
		};
    //this.savePoke = this.savePoke.bind(this);
  }
  

  render(){
    return(
      <HashRouter>

        <Route exact path="/" component={Home}/>
        <Route path="/detail" component={Detail} savePoke={this.savePoke} />
        <Route path="/owned" component={Owned}/>
      </HashRouter>
    )
  }
}

export default App;
