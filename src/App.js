import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
// import Footer from './Componets/Navbar/Footer'
import { Outlet } from "react-router-dom";
import Footer from "./Componets/Navbar/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
