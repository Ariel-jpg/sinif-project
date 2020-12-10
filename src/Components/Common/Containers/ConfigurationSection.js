import { connect } from 'react-redux';
import ConfigurationSectionScreen from '../Components/ConfigurationSectionScreen';
import { userActions } from "../../User/user.actions";

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    changeTheme: (themeName) => dispatch(userActions.changeTheme(themeName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationSectionScreen);
