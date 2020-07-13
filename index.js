// Rename to index.js
// Run json-server db.json --port 3001
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const URL = "http://localhost:3001/posts"; // json-server db.json --port 3001

function Post(props) {
const post =props.post
  return (
    <div className="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">{post.author}</div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.content}
        </p>
      </div>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data);
      });
  }, []); // <- [] means that the useEffect callback will be executed just once

  return (
    <>
      {posts.map(post => {
        // post.id, post.title, post.author, post.content
        return <Post key={post.id} post={post}></Post>;
      })}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
