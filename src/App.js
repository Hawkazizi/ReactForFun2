import React from "react";
import "./App.css";
import AllBoxes from "./components/allBoxes";
import SSB from "./components/StickySideBar";
function App() {
  return (
    <div>
      <SSB />
      <AllBoxes />
    </div>
  );
}

export default App;
