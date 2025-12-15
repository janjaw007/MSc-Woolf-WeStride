//1) import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

//2) get reference of the div with ID root;
const el = document.getElementById("root");

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4) create component
function App() {
  const name = "Chayanit";
  const age = 25;
  return (
    <div>
      <h1>
        Hi {name} is {age}!
      </h1>
    </div>
  );
}
//5) show the component on the screen
root.render(<App />);
