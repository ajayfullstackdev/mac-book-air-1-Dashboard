import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="flex flex-row min-w-full min-h-screen bg-white">
      <NavigationBar />
    </div>
  );
}

export default App;
