import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments &&
        comments.length !== 0 &&
        comments.map(comment => {
          let content;
          switch (comment.status) {
            case "approved":
              content = comment.content;
              break;
            case "pending":
              content = "This comment is awaiting moderation";
              break;
            case "rejected":
              content = "This comment has been rejected";
              break;

            default:
              content = comment.content;
              break;
          }

          return <li key={comment.id}>{content}</li>;
        })}
    </ul>
  );
};

export default CommentList;
