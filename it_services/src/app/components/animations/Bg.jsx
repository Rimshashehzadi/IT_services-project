"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Bg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,

        background: {
          color: {
            value: "#050816",
          },
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: ["#06b6d4", "#3b82f6", "#ffffff"],
          },

          links: {
            enable: true,
            color: "#06b6d4",
            distance: 160,
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.5,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}