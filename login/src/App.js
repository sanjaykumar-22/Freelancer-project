import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Dashboard from "./pages/dashboard";
import Layout from "./pages/Layout";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Layout} exact />
          <Route path="/login" component={LogIn} exact />
          <Route path="/signup" component={SignUp} exact />
          {/* <Route path="/" render={(props) => <Layout {...props} isAuthorized={this.props.isAuthorized} />} exact />
          <Route path="/login" render={(props) => <LogIn {...props} isAuthorized={this.props.isAuthorized} />} exact />
          <Route path="/signup" render={(props) => <SignUp {...props} isAuthorized={this.props.isAuthorized} />} exact /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;