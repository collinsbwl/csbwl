import React, { useEffect, useRef } from "react";

interface RainProps {
  numberOfDrops?: number;
  color?: string;
  zIndex?: number;
}

const Rain: React.FC<RainProps> = ({
  numberOfDrops = 150,
  color = "rgba(255, 255, 255, 0.6)",
  zIndex = 999,
}) => {
  const rainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rainContainer = rainContainerRef.current;
    if (!rainContainer) return;

    rainContainer.innerHTML = "";

    for (let i = 0; i < numberOfDrops; i++) {
      const raindrop = document.createElement("div");
      raindrop.classList.add("raindrop");
      raindrop.style.left = `${Math.random() * 100}vw`;
      const size = Math.random() * 0.5 + 0.5;
      raindrop.style.transform = `scale(${size})`;
      raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
      raindrop.style.animationDelay = `-${Math.random() * 2}s`;
      rainContainer.appendChild(raindrop);

      // Listen for animation iteration to create splash
      raindrop.addEventListener("animationiteration", () => {
        createSplash(raindrop, rainContainer);
      });
    }

    function createSplash(raindrop: HTMLDivElement, container: HTMLDivElement) {
      const splash = document.createElement("div");
      splash.classList.add("splash");
      const dropX = raindrop.style.left;
      const dropY = window.innerHeight;

      splash.style.left = dropX;
      splash.style.top = `${dropY - 5}px`;
      container.appendChild(splash);

      setTimeout(() => {
        splash.remove();
      }, 300);
    }

    return () => {
      if (rainContainer) {
        rainContainer.innerHTML = "";
      }
    };
  }, [numberOfDrops]);

  return (
    <>
      <div className="rain-overlay" ref={rainContainerRef}></div>
      <style jsx>{`
        .rain-overlay {
          position: fixed;
          top: 0;
          z-index: ${zIndex};
        }
      `}</style>
      <style jsx global>{`
        .raindrop {
          position: absolute;
          width: 2px;
          height: 30px;
          background: ${color};
          border-radius: 50% 50% 0 0;
          transform: rotate(0deg);
          animation: fall linear infinite;
          opacity: 0.7;
        }
        @keyframes fall {
          0% {
            transform: translateY(-100vh);
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        /* Splash */
        .splash {
          position: absolute;
          width: 5px;
          height: 2px;
          border-radius: 50%;
          background: ${color.replace("0.6", "0.5")};
          animation: splash-animation 0.3s ease-out;
          opacity: 0;
        }
        @keyframes splash-animation {
          0% {
            transform: scale(0.1);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Rain;
