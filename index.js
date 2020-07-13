// Rename to index.js
// Run json-server db.json --port 3001
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const URL = "http://localhost:3001/posts"; // json-server db.json --port 3001

function App(){

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))
    
  }, []); // <- [] means that the useEffect callback will be executed just once 

  return (
    <>
      App
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById( "root" )
);