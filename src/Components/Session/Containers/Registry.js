import { connect } from 'react-redux';
import { sessionActions } from '../session.actions';
import RegistryScreen from "../Components/RegistryScreen";

const mapStateToProps = state => ({
    registryPending: state.sessionReducer.ui.registryPending
});

const mapDispatchToProps = dispatch => ({
    registerRequest: (body) => dispatch(sessionActions.registerRequest(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistryScreen);