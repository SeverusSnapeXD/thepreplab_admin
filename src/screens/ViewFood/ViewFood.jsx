import React from 'react'
import './ViewFood.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Food from './Food';

function ViewFood() {
  return (
    <div className="MainDiv">
        <h1>View Food</h1>
        {/* <Router> */}
        {/* <Header /> */}
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <Food />
          {/* </Route> */}
          {/* <Route exact path="/add">
            <AddCustomer />
          </Route>
          <Route exact path="/edit/:id" render={props => <EditCustomer />} /> */}
        {/* </Switch> */}
      {/* </Router> */}
    </div>
  )
}

export default ViewFood