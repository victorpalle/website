"use client";

import { useEffect, useState, useRef } from "react";
import { colors } from "../../../lib/colors";
import InteractiveCircle2 from "../components/interactiveCercle2";
import * as Tone from "tone";
import Image from "next/image";

export const Page = () => {
  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: colors.primary }}
    >
      <div
        className="flex justify-center items-center gap-10"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <DrumGrid />
      </div>
    </div>
  );
};

const DrumGrid = () => {
  const [grid, setGrid] = useState([
    [false, false, false, false], // Kick
    [false, false, false, false], // Snare
    [false, false, false, false], // Hi-hat
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState<number | null>(null);

  const gridRef = useRef(grid);
  gridRef.current = grid;

  // Tone.js Players pour les samples
  const playersRef = useRef<Tone.Players | null>(null);

  useEffect(() => {
    playersRef.current = new Tone.Players({
      kick: "/kick.mp3",
      snare: "/snare.mp3",
      hihat: "/hihat.mp3",
    }).toDestination();
  }, []);

  const toggleCell = (row: number, col: number) => {
    const newGrid = grid.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? !cell : cell))
    );
    setGrid(newGrid);
  };

  useEffect(() => {
    const transport = Tone.getTransport();
    transport.bpm.value = 170;

    let step = 0;

    const repeat = (time: number) => {
      setCurrentStep(step);

      // Jouer les sons si les cellules sont actives
      gridRef.current.forEach((row, rowIndex) => {
        const isActive = row[step];
        if (isActive && playersRef.current) {
          const name =
            rowIndex === 0 ? "kick" : rowIndex === 1 ? "snare" : "hihat";
          playersRef.current.player(name).start(time);
        }
      });

      step = (step + 1) % gridRef.current[0].length;
    };

    transport.scheduleRepeat(repeat, "4n");

    return () => {
      transport.cancel();
    };
  }, []);

  const handlePlay = async () => {
    await Tone.start(); // nécessaire pour activer l'audio
    const transport = Tone.getTransport();
    if (!isPlaying) {
      transport.start();
    } else {
      transport.stop();
      setCurrentStep(null);
    }
    setIsPlaying(!isPlaying);
  };

  const paths = [
    "M150,30 C40,25 260,90 220,160 C180,230 100,220 70,180 C40,110 110,40 150,30 Z",
    "M150,40 C185,30 250,100 215,160 C180,200 95,230 65,180 C45,120 115,45 150,40 Z",
    "M150,35 C200,25 265,95 225,165 C180,230 95,245 68,185 C15,115 80,42 120,35 Z",
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex items-center justify-center absolute left-0 top-0 w-54"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <InteractiveCircle2 label="Play" onClick={handlePlay} />
      </div>

      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2">
          {row.map((active, colIndex) => (
            <div
              key={colIndex}
              className="p-1 rounded-sm"
              style={{backgroundColor: currentStep === colIndex ? colors.tertiary : 'transparent'}}
            >
              <InteractiveCircle2
                shouldBeFilled={active}
                pathD={paths[rowIndex]}
                onClick={() => toggleCell(rowIndex, colIndex)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
