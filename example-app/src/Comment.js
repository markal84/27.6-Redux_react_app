import React from 'react';

const Comment = ({text, votes, id, thumbsUp, thumbsDown, removeComment}) =>
  <li>
    {text} <span>votes: {votes}</span> <button onClick={() => thumbsUp(id)}>Thumb up</button>
    <span> <button onClick={() => thumbsDown(id)}>Thumb down</button></span>
    
  </li>;

  export default Comment;

  // <span> <button onClick={() => removeComment(id)}>Remove comment</button></span>