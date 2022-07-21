import React from "react";

import Presentation from "./pages/Presentation";

import developerData from "./developer.json";

function Portfolio() {
  return (
    <div className="App">
      <Presentation
        name={developerData.name}
        role={developerData.role}
        descriptions={developerData.terminalDescriptions}
      />
    </div>
  );
}

export default Portfolio;
