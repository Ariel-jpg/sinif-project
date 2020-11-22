import { connect } from 'react-redux';
import { userActions } from '../../User/user.actions';
import HomeScreenWrapper from "../Components/HomeScreenWrapper";
import { homeActions } from '../home.actions';

const mapStateToProps = (state) => ({
    classCode: state.homeReducer.classCode,
    colorPage: state.userReducer.user.userSettings.colorTheme,
})

const mapDispatchToProps = dispatch => ({
    loadAllClassMessages: (messages) => dispatch(homeActions.loadAllClassMessages(messages)),
    loadNewClassMessages: (message) => dispatch(homeActions.loadNewClassMessages(message)),
    joinClass: (classCode) => dispatch(userActions.joinClassRequest(classCode))

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenWrapper)