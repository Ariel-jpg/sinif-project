import { connect } from 'react-redux';
import HomeScreen from '../Components/HomeScreen';
import { homeActions } from '../home.actions';

const mapStateToProps = (state) => ({
    classCode: state.homeReducer.classCode,
    lessons: state.homeReducer.lessons,
    questionId: state.homeReducer.questionId,
    messages: state.homeReducer.messages,
    totalQuestionsLength: state.homeReducer.totalQuestionsLength
});

const mapDispatchToProps = dispatch => ({
    changeClass: (newClassCode) => dispatch(homeActions.changeClass(newClassCode)),
    changeQuestion: (newQuestionId) => dispatch(homeActions.changeQuestion(newQuestionId)),
    getUserLessons: () => dispatch(homeActions.getUserLessonsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);