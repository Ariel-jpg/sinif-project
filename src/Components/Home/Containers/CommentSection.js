import { connect } from 'react-redux';
import { userActions } from '../../User/user.actions';
import CommentsSectionScreen from '../Components/CommentsSectionScreen';
import { homeActions } from '../home.actions';

const mapStateToProps = (state) => ({
    classCode: state.homeReducer.classCode,
    comments: state.homeReducer.comments
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsSectionScreen);