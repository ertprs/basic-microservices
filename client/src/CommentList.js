import Axios from "axios";
import React, { useEffect, useState } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await Axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul>
      {comments.length !== 0 &&
        comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
    </ul>
  );
};

export default CommentList;
