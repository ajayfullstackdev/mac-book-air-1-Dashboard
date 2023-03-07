import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import ja_morant from "./assets/ja_morant.jpg";
import ProfileView from "./components/ProfileView";
function App() {
  return (
    <div className="flex flex-row min-w-full min-h-screen bg-white">
      <NavigationBar />
      <div className="flex-1 flex md:flex-row flex-col">
        <ProfileView image={ja_morant} name="Diane Cooper" email="diane.cooper@example.com" past={15} upcoming={2} files={["Check Up Results.pdf","Check Up Results.pdf","Medical Prescription.pdf","Dental X-Ray Result.pdf"]}/>
      </div>
    </div>
  );
}

export default App;
