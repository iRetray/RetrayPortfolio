import Presentation from "./pages/Presentation";

import developerData from "./developer.json";

function Portfolio() {
  return (
    <div className="App">
      <Presentation name={developerData.name} role={developerData.role} />
    </div>
  );
}

export default Portfolio;
