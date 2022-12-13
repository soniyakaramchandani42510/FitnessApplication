import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExcersiceDetail from "./pages/ExcersiceDetail";
import Footer from "./components/Footer";
function App() {
  return (
    <>
     
      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
       
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/excercise/:id" element={<ExcersiceDetail  />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </Box>
    </>
  );
}

export default App;
