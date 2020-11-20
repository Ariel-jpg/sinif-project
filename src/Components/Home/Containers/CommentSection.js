import { connect } from 'react-redux';
import { userActions } from '../../User/user.actions';
import CommentsSectionScreen from '../Components/CommentsSectionScreen';
import { homeActions } from '../home.actions';

const mapStateToProps = (state) => ({
    questionId: state.homeReducer.questionId,
    comments: state.homeReducer.comments,
    totalLength: state.homeReducer.totalCommentsLength,
    messages: state.homeReducer.messages,
});

const mapDispatchToProps = dispatch => ({
    loadAllComments: (body) => dispatch(homeActions.loadAllComments(body)),
    loadNewComment: (comment) => dispatch(homeActions.loadNewComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsSectionScreen);