import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "./Component/Home";
import { Layout } from "./Component/Layout";
import { Mp3 } from "./Component/Mp3";
import { Tamil } from "./Component/Tamil";
import { Telugu } from "./Component/Telugu";
import { VideoSongs } from "./Component/VideoSongs";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="mp3" element={<Mp3/>}/>
          <Route path="tamil" element={<Tamil />} />
          <Route path="telugu" element={<Telugu />} />
          <Route path="video" element={<VideoSongs />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
