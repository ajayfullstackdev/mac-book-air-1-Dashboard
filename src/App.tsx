import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import ja_morant from "./assets/p.svg";
import ProfileView from "./components/ProfileView";
import { profileProperty } from "./utils/types";
import TabbedComponent from "./components/TabbedComponent";
function App() {
  const profileProperties: profileProperty[] = [
    {
      title: "Gender",
      value: "Female",
    },
    {
      title: "Birthday",
      value: "Feb 24th, 1997",
    },
    {
      title: "Phone number",
      value: "(239) 555-0108",
    },
    {
      title: "Registered Date",
      value: "Feb 24th, 1997",
    },
    {
      title: "Street Address",
      value: "JL. Diponegoro No. 21",
    },
    {
      title: "City",
      value: "Cilacap",
    },
    {
      title: "Zip Code",
      value: "655849",
    },
    {
      title: "Member Status",
      value: "Active Member",
    },
  ];
  return (
    <div className="flex flex-row min-w-full min-h-screen bg-white">
      <NavigationBar />
      <div className="flex-1 flex md:flex-row flex-col">
        <ProfileView
          image={ja_morant}
          name="Diane Cooper"
          email="diane.cooper@example.com"
          past={15}
          upcoming={2}
          files={[
            "Check Up Results.pdf",
            "Check Up Results.pdf",
            "Medical Prescription.pdf",
            "Dental X-Ray Result.pdf",
          ]}
        />
        <div className="flex-1 flex flex-col space-y-10 pr-10 pt-12 ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-3 md:ml-0">
            {profileProperties.map((property, index) => (
              <div className="flex flex-col pb-3 border-b border-b-gray-400 space-y-2 w-44  md:md-0 md:w-44">
                <p className="text-gray-500 text-sm">{property.title}</p>
                <p>{property.value}</p>
              </div>
            ))}
          </div>
          <TabbedComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
