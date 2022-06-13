import { useEffect, useState } from "react";
import "./index.less";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="page">Some section1</div>
      <div className="page">Some section2</div>
      <div className="page">Some section3</div>
      <div className="page">Some section4</div>
    </>
  );
}

export default App;
