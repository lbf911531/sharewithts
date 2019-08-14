
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Hello from '../containers/Hello';
import TextTable from '../containers/testTable';

class MenuContent extends Component {
  
  public render() {
    return (
      <div>
       <Switch>
          <Route exact path="/" component={Hello} /> 
          <Route path="/second" component={TextTable} />
          <Route path="/third" component={Hello} />
       </Switch>
      </div>
    )
  }
}

export default MenuContent;