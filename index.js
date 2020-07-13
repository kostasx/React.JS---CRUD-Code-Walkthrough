// Rename to index.js
// Run json-server db.json --port 3001
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

  useEffect(()=>{
    // R(EAD)
    
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