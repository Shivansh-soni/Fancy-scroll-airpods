import React, { useEffect, useRef } from "react";
import "./Scroll.css";
import "react-canvas-paint/dist/index.css";

function Scroll() {
  const currentFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;

  const frameCount = 147;
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.height = 770;
    canvas.width = 1158;
    const img = new Image();
    img.src = currentFrame(1);
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop;
      const maxheight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = winScroll / maxheight;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrolled * frameCount)
      );
      requestAnimationFrame(() => {
        updateImage(frameIndex + 1);
      });
    });
  });

  return (
    <div className="App">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Scroll;
