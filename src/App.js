import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Home/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import RequireAuth from "./pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyReview from "./pages/Dashboard/MyReview";
import MyHistory from "./pages/Dashboard/MyHistory";
import AllUsers from "./pages/Dashboard/AllUsers";
import RequireAdmin from "./pages/Login/RequireAdmin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="my-review" element={<MyReview />}></Route>
          <Route path="my-history" element={<MyHistory />}></Route>
          <Route path="all-users" element={<RequireAdmin><AllUsers/></RequireAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
