import { connect } from 'react-redux';
import { sessionActions } from '../session.actions';
import LoginScreen from "../Components/LoginScreen";

const mapStateToProps = state => ({
    loginPending: state.sessionReducer.ui.loginPending
});

const mapDispatchToProps = dispatch => ({
    loginRequest: (dni, password) => dispatch(sessionActions.loginRequest(dni, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);