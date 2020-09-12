import Axios from "axios";
import React, { useEffect, useState } from "react";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments &&
        comments.length !== 0 &&
        comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
    </ul>
  );
};

export default CommentList;
