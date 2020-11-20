import { connect } from 'react-redux';
import { userActions } from '../../User/user.actions';
import HomeScreen from '../Components/HomeScreen';
import { homeActions } from '../home.actions';

const mapStateToProps = (state) => ({
    classCode: state.homeReducer.classCode,
    colorPage: state.userReducer.user.userSettings.colorTheme,
    lessons: state.homeReducer.lessons,
    questionId: state.homeReducer.questionId,
    messages: state.homeReducer.messages,
    totalLength: state.homeReducer.totalQuestionsLength
});

const mapDispatchToProps = dispatch => ({
    changeClass: (newClassCode) => dispatch(homeActions.changeClass(newClassCode)),
    changeQuestion: (newQuestionId) => dispatch(homeActions.changeQuestion(newQuestionId)),
    getUserLessons: () => dispatch(homeActions.getUserLessonsRequest()),
    loadAllClassMessages: (messages) => dispatch(homeActions.loadAllClassMessages(messages)),
    loadNewClassMessages: (message) => dispatch(homeActions.loadNewClassMessages(message)),
    joinClass: (classCode) => dispatch(userActions.joinClassRequest(classCode))    
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);