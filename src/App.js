import React, { useState, useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';

//components
import Basic from "./components/pages/Basic";
import Creative from "./components/pages/Creative";

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const styles = {
    centerContent: {
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        minHeight: `${windowHeight}px`
    }
}

useEffect(() => {
  setWindowHeight(window.innerHeight)
  window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight)
  })

  return () => {
      window.removeEventListener('resize', setWindowHeight)
  }
}, [])
  return (
    <div style={styles.centerContent}>
    <HashRouter>
          <Routes>
            <Route exact path="/" element={<Basic />}  />
            <Route exact path="/creative" element={<Creative />}  />
          </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
