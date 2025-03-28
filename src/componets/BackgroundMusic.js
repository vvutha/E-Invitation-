import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const YOUTUBE_VIDEO_ID = "G_xvY5u1RP8"; // Your YouTube video ID

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&mute=${isMuted ? 1 : 0}`;
    }
  }, [isMuted]); // ✅ No more ESLint warning

  useEffect(() => {
    const unmuteOnClick = () => {
      setIsMuted(false);
      document.removeEventListener("click", unmuteOnClick);
    };

    document.addEventListener("click", unmuteOnClick);
    return () => document.removeEventListener("click", unmuteOnClick);
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <>
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        src=""
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
        title="Background Music"
        className="d-none"
      ></iframe>

      <Button
        onClick={toggleMute}
        className="p-0 border-0 bg-transparent mute-button"
        style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}
      >
        {isMuted ? <FaVolumeMute size={30} style={{ color: "black" }} /> : <FaVolumeUp size={30} style={{ color: "black" }} />}
      </Button>
    </>
  );
};

export default BackgroundMusic;


