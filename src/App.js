import React from "react";
import Settings from "./components/Settings";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import ProfileVerification from "./components/ProfileVerification";
import General from "./components/General.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Pricacy from "./components/Pricacy";
import Password from "./components/Password";
import Sessions from "./components/Sessions";
import TwofacAuth from "./components/TwofacAuth";
import Block from "./components/Block";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/setting/" element={<Settings />}>
          <Route path="/setting/general" element={<General />} />
          <Route path="/setting/notifications" element={<Notifications />} />
          <Route path="/setting/profile" element={<Profile />} />
          <Route path="/setting/profile-verification" element={<ProfileVerification />} />
          <Route path="/setting/privacy" element={<Pricacy />} />
          <Route path="/setting/password" element={<Password />} />
          <Route path="/setting/sessions" element={<Sessions />} />
          <Route path="/setting/twofac-auth" element={<TwofacAuth />} />
          <Route path="/setting/block" element={<Block />} />
          <Route path="/setting/delete" element={<Delete />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
