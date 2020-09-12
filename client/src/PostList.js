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
    <div>
      {Object.values(posts).length !== 0 &&
        Object.values(posts).map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

export default PostList;
