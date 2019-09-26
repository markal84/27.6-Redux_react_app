import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMBS_UP, THUMBS_DOWN} from './actions'


function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id)
        
        case EDIT_COMMENT:
            return state.map(comment => {
                  if (comment.id === action.id) {
                    comment.text = action.text
                  }
                  return comment;
            });
          
        case THUMBS_UP:
            return state.map(comment => {
                  if (comment.id === action.id) {
                    return {...comment, votes: comment.votes +1};
                  }
                  return comment;
            });
          
        case THUMBS_DOWN:
            return state.map(comment => {
                if (comment.id === action.id) {
                return {...comment, votes: comment.votes -1}
                }
                return comment;
            });
            
        default:
            return state;
    }
}

export default comments;