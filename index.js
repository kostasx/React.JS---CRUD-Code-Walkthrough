// Rename to index.js
// Run json-server db.json --port 3001
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const URL = "http://localhost:3001/posts"; // json-server db.json --port 3001

function Post(props) {
  const post = props.post;
  // const { post } = props; // Same thing, fewer characters
  const handleDelete = (e)=>{
    props.del( post.id );
  } 
  return (
    <div className="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">
        {post.author}
        <button onClick={handleDelete} className="btn btn-danger btn-sm float-right">DELETE</button>
      </div>
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

  const removePost = ( id )=>{
    // Fetch -> URL + ID + DELETE
    // json-server -> HTTP DELETE: http://local/posts/3
    fetch( URL + "/" + id, { method: "DELETE" })
    .then( res => res.json() )
    .then( () => {
      const updatedPosts = posts.filter( post => post.id !== id );
      setPosts( updatedPosts );
    }).catch( error => console.log(error) );
  }
  return (
    <>
      {posts.map(post => {
        // post.id, post.title, post.author, post.content
        return <Post key={post.id} post={post} del={removePost}></Post>;
      })}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
