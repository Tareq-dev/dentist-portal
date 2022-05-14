import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Home/Navbar";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/appoinment" element={<Appointment />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
