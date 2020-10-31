import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Login from './Session/Containers/Login';

const PrivateRoute = ({ component, userLogged, props }) =>
  userLogged ? <Route {...props} children={component} /> : <Redirect to="/unauthorized" />

function App({ isLogged }) {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          children={props => <Login {...props} />}
        />
        <Route
          exact path="/join"
          children={props => <Login {...props} />}
        />
        {/* <PrivateRoute
          userLogged={true}
          exact path="/priv"
          component={}
        /> */}

        <Route
          exact path="/unauthorized"
          children={<p>Sin autorización</p>}
        />
        <Route
          exact path="*"
          children={<p>A casa pete</p>}
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({ isLogged: state.sessionReducer.isLogged })

export default connect(mapStateToProps, null)(App)