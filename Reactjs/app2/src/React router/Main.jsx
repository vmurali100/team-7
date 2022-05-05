import React from "react";
import { Routes } from "react-router";
import { First } from "./First";
import { Routes,Route } from "react-router";
import { About } from "./About";
import { Gallery } from "./Gallery";
import { Project } from "./Project";
import { Contact } from "./Contact";

export default function Main(){
return(
    <div>
        <Routes>
            <Route path="/" element={<First/>}></Route>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="project" element={<Project/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Routes>
    </div>
)
}