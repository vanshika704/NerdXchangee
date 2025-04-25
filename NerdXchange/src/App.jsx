
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./pages/page1";

import "./index.css";
import OnlineCodeEditor from "./pages/codeeditor";
import Explore from "./pages/explore";
import Connect from "./pages/connect";
import Messages from "./pages/messages";
import Resources from "./pages/resources";
import Profile from "./pages/profile";
import Signup from "./pages/singup";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/editor" element={<OnlineCodeEditor/>} />
        <Route path="/discover" element={<Explore/>}/>
        <Route path="/connect" element={<Connect/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
