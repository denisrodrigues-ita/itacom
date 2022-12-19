import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./public/Header";
import Footer from "./public/Footer";
import Home from "./Pages/Home";
import Segment from "./Pages/Segment";
import Company from "./Pages/Company";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Busca from "./Pages/Busca";
import "./Resetcss.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="AppBoddy">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":segment" element={<Segment />} />
          <Route path="busca/:pesquisa" element={<Busca />} />
          <Route path=":segment/:company" element={<Company />} />
          <Route path="contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
