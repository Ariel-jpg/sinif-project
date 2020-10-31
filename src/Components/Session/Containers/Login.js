import { connect } from 'react-redux';
import themes from '../../Constants/Themes';
import { sessionActions } from '../session.actions';
import LoginScreen from "../Components/LoginScreen";

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    loginRequest: (dni, password) => dispatch(sessionActions.loginRequest(dni, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);