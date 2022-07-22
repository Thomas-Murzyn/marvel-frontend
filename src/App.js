import "./App.css";

import Header from "./Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Character from "./pages/Character";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [dataSearch, setDataSearch] = useState("");
  const [validateData, setValidateData] = useState("");
  console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ validateData", validateData);
  const [x, setX] = useState();
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <Router>
      <Header
        setValidateData={setValidateData}
        setX={setX}
        setDataSearch={setDataSearch}
        dataSearch={dataSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isModalActive={isModalActive}
              setIsModalActive={setIsModalActive}
              validateData={validateData}
              x={x}
              dataSearch={dataSearch}
              setDataSearch={setDataSearch}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              validateData={validateData}
              isModalActive={isModalActive}
              setIsModalActive={setIsModalActive}
              x={x}
              dataSearch={dataSearch}
              setDataSearch={setDataSearch}
            />
          }
        />
        <Route
          path="/character/:id"
          element={
            <Character
              isModalActive={isModalActive}
              setIsModalActive={setIsModalActive}
              x={x}
              dataSearch={dataSearch}
              setDataSearch={setDataSearch}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
