import React, { useEffect } from "react";
import app from "./firebase";

function App() {
  useEffect(() => {
    console.log("Firebase app:", app);
  }, []);

  return (
    <div>
      <h1>Firebase je povezan!</h1>
    </div>
  );
}

export default App;
