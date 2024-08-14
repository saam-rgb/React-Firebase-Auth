import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
