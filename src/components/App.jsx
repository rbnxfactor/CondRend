import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;

const currentTime = new Date(2020, 11, 1, 18).getHours();

function App() {
  return (
    <div className="container">
      {
        //Ternary
        /* isLoggedIn ?<h1>Hello</h1>; : return <Login />; } */
      //AND Operator
      // currentTime > 12 ? <h1>Why are you still working?</h1> : null}
      // ;
    </div>
  );
}

export default App;
