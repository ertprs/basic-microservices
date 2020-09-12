import Axios from "axios";
import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await Axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(posts).length !== 0 &&
        Object.values(posts).map(post => (
          <div
            className="card"
            style={{ width: "30%", marginBottom: "20px" }}
            key={post.id}
          >
            <div className="card-body">
              <h3>{post.title}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
