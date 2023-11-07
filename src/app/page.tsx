"use client"

import { VideoPlayer } from "@/components/VideoPlayer";
import { useState } from "react";

const Page = () => {
const [playing, setPlaying] = useState(false);


  return(
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{playing ? 'RODANDO' : 'PAUSANDO'}</p>
        <button className="bg-blue-400 rounded-md p-3 text-black" onClick={() => setPlaying(!playing)}>Play/Stop</button>
      </div>
        <VideoPlayer
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          isPlaying={playing}
        />

    </div>
  );
}

export default Page;
