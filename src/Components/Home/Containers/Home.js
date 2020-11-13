import { connect } from 'react-redux';
import { userActions } from '../../User/user.actions';
import HomeScreen from '../Components/HomeScreen';
import { homeActions } from '../home.actions';

const mapStateToProps = (state) => ({
    classCode: state.homeReducer.classCode,
    colorPage: state.userReducer.user.userSettings.colorTheme,
    lessons: state.homeReducer.lessons,
    messages: state.homeReducer.messages,
    totalLength: state.homeReducer.totalLength
});

const mapDispatchToProps = dispatch => ({
    changeClass: (newClassCode) => dispatch(homeActions.changeClass(newClassCode)),
    getUserLessons: () => dispatch(homeActions.getUserLessonsRequest()),
    loadAllClassMessages: (messages) => dispatch(homeActions.loadAllClassMessages(messages)),
    loadNewClassMessages: (message) => dispatch(homeActions.loadNewClassMessages(message)),
    joinClass: (classCode) => dispatch(userActions.joinClassRequest(classCode))    
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);