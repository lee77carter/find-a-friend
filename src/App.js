import "./styles.css";
import { useState, useEffect } from "react";
import { Loader } from "react-feather";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <div className="App">
      <UserDetails />
    </div>
  );
};

export default App;
