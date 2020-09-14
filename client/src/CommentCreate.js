import Axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  return (
    <div>
      <form
        onSubmit={async e => {
          e.preventDefault();
          await Axios.post(`http://posts.com/posts/${postId}/comments`, {
            content
          });
          setContent("");
        }}
      >
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
