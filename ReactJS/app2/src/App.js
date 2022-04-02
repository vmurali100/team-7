import React from "react";
import ClassCompState from "./Components/ClassCompState";
import ClassCompStateEvent from "./Components/ClassComStateEvent";
import FuncCompState from "./Components/FunctCompState";
import { ParentComponent } from "./Components/ParentCompoent";
import "./style.css";

export default function App() {
  return (
    <div>
      {/* <ClassCompState/> */}
      {/* <ClassCompStateEvent/> */}
      {/* <FuncCompState/> */}
      <ParentComponent/>
    </div>
  );
}
