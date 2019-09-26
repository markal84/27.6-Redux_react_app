import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbsUp} from './actions';
import {thumbsDown} from './actions';
import {removeComment} from './actions';

const mapDispatchToProps = dispatch => ({
  thumbsUp: (id) => dispatch(thumbsUp(id)),
  thumbsDown: (id) => dispatch(thumbsDown(id)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);