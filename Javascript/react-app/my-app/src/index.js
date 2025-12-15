//1) import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

//2) get reference of the div with ID root;
const el = document.getElementById("root");

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4) create component
function App() {
  //logic or bussiness logic
  //const name = "Chayanit";
  //const age = 25;
  const inputType = "number";
  const inputMin = 3;
  // display logic
  return (
    <div>
      <input
        type={inputType}
        min={inputMin}
        style={{ border: "2px solid red", fontSize: "30px" }}
      />
    </div>
  );
}
//5) show the component on the screen
root.render(<App />);
