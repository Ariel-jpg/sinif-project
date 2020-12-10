import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import SessionWrapper from './Session/Components/SessionWrapperScreen';
import HomeScreenWrapper from './Home/Containers/HomeWrapper';

const PrivateRoute = ({ component, userLogged, props }) =>
  userLogged ? <Route {...props} children={component} /> : <Redirect to="/" />

const App = (props) => <Router>
  <Switch>
    <Route
      exact path="/" // Login and registry
      children={props => props.isLogged ? <Redirect to="/home" /> : <SessionWrapper {...props} />}
    />
    <PrivateRoute
      userLogged={props.isLogged}
      exact path="/home" // Principal page
      component={<HomeScreenWrapper />}
    />

    <Route
      exact path="/unauthorized"
      children={<main style={complementaryPagesStyle}>No posee autorización para acceder a esta página.</main>}
    />
    <Route
      exact path="*"
      children={<main style={complementaryPagesStyle}>La ruta ingresada no existe</main>}
    />
  </Switch>
</Router>

const mapStateToProps = state => ({ isLogged: state.userReducer.isLogged });

const complementaryPagesStyle = {
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
  height: "100vh"
};

export default connect(mapStateToProps)(App)