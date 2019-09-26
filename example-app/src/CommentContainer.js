import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbsUp} from './actions'
import {thumbsDown} from './actions'

const mapDispatchToProps = dispatch => ({
  thumbsUp: (id) => dispatch(thumbsUp(id)),
  thumbsDown: (id) => dispatch(thumbsDown(id))
});

export default connect(null, mapDispatchToProps)(Comment);