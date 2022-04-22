import React from "react";
import { Layout } from "./Components/Layout";
import "./style.css";
import User from "./User";
import Users_Server from "./Users_Server";
import { Routes, Route} from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Gallery } from "./Components/Gallery";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";

export default function App() {
  return (
    <div>
      {/* <User/> */}
      {/* <Users_Server/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </div>
  );
}
