import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllShoes from "./components/AllShoes";
import Nav from "./components/Nav";
import Shoe from "./components/Shoe";
// ===================================================================
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [shoesData, setShoesData] = useState({});

  return (
    <div className="App">
      <Nav></Nav>
      {isLoading && <h2 className="spinner">Spinner</h2>}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome!</h1>
              <img src="./images/MeirShoesWhite.png" alt="logo" />
            </div>
          }
        />
        <Route
          path="/shoes"
          element={<AllShoes setIsLoading={setIsLoading} />}
        />
        <Route
          path="/shoes/:id"
          element={
            <Shoe setIsLoading={setIsLoading} setShoesData={setShoesData} />
          }
        />
        {/* <Route path='/add-shoe' element={<h1>Add Shoes</h1>} /> */}
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
      <footer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
      {/* <header className="App-header">
      </header> */}
    </div>
  );
}

export default App;
