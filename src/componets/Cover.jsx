import React, { useEffect, useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/image/bg.jpg";
import coupleImage from "../assets/image/couple.png";
import leafImage from "../assets/image/leaf1.png";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../assets/style.css";
import butterflyImage from "../assets/image/butterfly.png";
import Butterfly from "./Butterfly";

const YOUTUBE_VIDEO_ID = "G_xvY5u1RP8";
const numLeaves = 8;

const generateFallingLeaves = () =>
  Array.from({ length: numLeaves }).map((_, i) => {
    const size = 60 + Math.random() * 50;
    return {
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: 20 + Math.random() * 15,
      size,
      rotateStart: Math.random() * 360,
      rotateAmount: (Math.random() - 0.5) * 90,
      xMovement: (Math.random() - 0.5) * 40,
      opacity: 0.7 + Math.random() * 0.3,
    };
  });

const Cover = () => {
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: isMuted ? "unMute" : "mute", args: "" }),
        "*"
      );
    }
  };

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&mute=${isMuted ? 1 : 0}`;
    }
  }, [isMuted]);

  return (
    <div
      className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden responsive-bg"
      style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
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

      <Container className="text-center rounded w-md-75 w-lg-50 position-relative z-1">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className=" mb-2 preahvihear-regular mt-5 text1">
          <h1 className="fw-bold" style={{ fontSize: "33px" }}>សិរីមង្គល</h1>
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className=" mb-4 mt-3 preahvihear-regular text1">
          <h1 className="fw-bold" style={{ fontSize: "40px" }}>អាពាហ៏ពិពាហ៏</h1>
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="textwarn fw-bold mb-5 responsive-h2 medium-screen-adjust  ">
          Monivan & SoPhanith
        </motion.h2>

        <motion.img src={coupleImage} alt="Couple" className="img-fluid couple-image " initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 1 }} />

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
          className="text1 fs-5 mb-4 mt-2 fw-bold khmer-moul-text">
          ១០ មីនា ២០២៥ <br />ដែលនឹងធ្វេីឡេីងនៅគេហដ្ឋានខាងស្រី
        </motion.p>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="primary" size="lg" className="text1 fw-bold px-4 py-2 preahvihear-regular" onClick={() => navigate("/detail")}>បើកធៀប</Button>
        </motion.div>
      </Container>

      {generateFallingLeaves().map(({ id, left, delay, duration, size, rotateStart, rotateAmount, xMovement }) => (
        <motion.img key={id} src={leafImage} alt="Falling Leaf" className="position-absolute" style={{ left, width: `${size}px`, opacity: 0.7, zIndex: 2 }}
          initial={{ top: "-10vh" }} animate={{ top: "100vh", x: [`${xMovement}vw`, `-${xMovement}vw`, `${xMovement / 2}vw`],
          rotate: [`${rotateStart}deg`, `${rotateStart + rotateAmount}deg`, `${rotateStart - rotateAmount / 2}deg`] }}
          transition={{ duration, delay, repeat: Infinity, ease: "linear" }} />
      ))}

      <Button onClick={toggleMute} className="mt-3 p-0 border-0 bg-transparent mute-button" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}>
        {isMuted ? <FaVolumeMute size={30} style={{ color: "black" }} /> : <FaVolumeUp size={30} style={{ color: "black" }} />}
      </Button>

      {[...Array(8)].map((_, index) => {
  const startY = 120 * (index % 5); // Vertical positioning for both sides
  const delay = index * 0.3; // Delay for animation
  const size = 10 + index * 5; // Size of the butterfly
  
  // Left side butterflies
  const startXLeft = Math.random() * (window.innerWidth / 10); // Random position on the left side

  // Right side butterflies: Same Y position but mirrored X position
  const startXRight = Math.random() * (window.innerWidth / 2) + window.innerWidth / 2; // Positioning on the right side

  return (
    <>
      <Butterfly
        key={`left-${index}`} // Key for left side butterflies
        startX={startXLeft}  // Left side X
        startY={startY}      // Y position (same for both)
        delay={delay}        // Delay for animation
        imgSrc={butterflyImage} // Image source
        size={size}          // Size of the butterfly
      />
      <Butterfly
        key={`right-${index}`} // Key for right side butterflies
        startX={startXRight}   // Right side X (mirrored)
        startY={startY}        // Y position (same for both)
        delay={delay}          // Delay for animation
        imgSrc={butterflyImage} // Image source
        size={size}            // Size of the butterfly
      />
    </>
  );
})}

      
      
      
    </div>
  );
};

export default Cover;




