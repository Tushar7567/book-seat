// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      {/* <Body /> */}
        <Routes>
          <Route path="/reserve" element={<Body />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
