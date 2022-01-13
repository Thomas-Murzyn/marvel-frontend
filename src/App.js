import "./App.css";

import Header from "./Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Character from "./pages/Character";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [dataSearch, setDataSearch] = useState("");

  return (
    <Router>
      <Header setDataSearch={setDataSearch} />
      <Routes>
        <Route path="/" element={<Home dataSearch={dataSearch} />} />
        <Route path="/comics" element={<Comics dataSearch={dataSearch} />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
