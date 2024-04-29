import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => console.log("complete")} />
    </div>
  );
};

export default App;
