"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import '../../styles/bgParticles.css';
export const BgParticles = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "none",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 95,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#38bdf8", "#f59e0b", "#67e8f9"],
        },
        links: {
          color: "#67e8f9",
          distance: 130,
          enable: true,
          opacity: 0.12,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 55,
        },
        opacity: {
          value: { min: 0.1, max: 0.45 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
        fullScreen: {
            enable: false,
            zIndex: 1,
        },
    }),
    [],
  );

  if (init) {
    return (
        <div className='particlesWrapper'>
            <Particles
                id="tsparticles"
                options={options}
                className='particlesContainer'
            />
        </div>
      
    );
  }

  return <></>;
};