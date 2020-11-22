import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import SessionWrapper from './Session/Components/SessionWrapperScreen';
import HomeScreenWrapper from './Home/Containers/HomeScreenWrapper';

const PrivateRoute = ({ component, userLogged, props }) =>
  userLogged ? <Route {...props} children={component} /> : <Redirect to="/" />

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path="/" // Login and registry
            children={props => this.props.isLogged ? <Redirect to="/home" /> : <SessionWrapper {...props} />}
          />
          <PrivateRoute
            userLogged={this.props.isLogged}
            exact path="/home" // Principal page
            component={<HomeScreenWrapper />}
          />

          <Route
            exact path="/unauthorized"
            children={<p>Sin autorización</p>}
          />
          <Route
            exact path="*"
            children={<p>A casa</p>}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ isLogged: state.userReducer.isLogged })

export default connect(mapStateToProps, null)(App)