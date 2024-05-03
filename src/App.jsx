import "./App.css";
import { CvGeneration } from "./pages/CvGeneration";
import { CvListing } from "./pages/CvListing";
import { Creation } from "./pages/Creation";
import { Editing } from "./pages/Editing";
import { Viewing } from "./pages/Viewing";

import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route
              exact
              path="/CvGeneration"
              element={<CvGeneration />}
            ></Route>
            <Route exact path="/CvListing" element={<CvListing />}></Route>
            <Route exact path="/Creation" element={<Creation />}></Route>
            <Route exact path="/View" element={<Viewing />}></Route>
            <Route exact path="/Edit" element={<Editing />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
