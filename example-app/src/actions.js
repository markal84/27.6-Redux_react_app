import uuid from 'uuid';


export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMBS_UP = 'THUMBS_UP';
export const THUMBS_DOWN = 'THUMBS_DOWN';


// add comment action
 
export default function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}


// edit comment action

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}


// remove comment action

export function removeComment(commentId) {
    return {
        type: REMOVE_COMMENT,
        id: commentId, 
        text: 'comment removed'
    }
}


// Thumbs up action

export function thumbsUp(commentId){
    return {
        type: THUMBS_UP,
        id: commentId
    }
}

// Thumbs down action

export function thumbsDown(commentId){
    return {
        type: THUMBS_DOWN,
        id: commentId
    }
}


