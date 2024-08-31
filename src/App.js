import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FooterSecond from "./Components/FooterSecond";

// TO DO: FIX ADD CLASS AS IT FILLS THE ARRAY IN AN INCORRECT WAY
// TO DO : FIX DATE FORMATTING ON ADD NEW CLASS

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes className="">
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <FooterSecond />
      </BrowserRouter>
    </div>
  );
}

export default App;
