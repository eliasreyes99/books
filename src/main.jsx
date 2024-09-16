import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import BookDetail from "./Pages/BookDetail";
import Favorites from "./Pages/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/bookdetail" element={<BookDetail/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
