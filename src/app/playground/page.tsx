"use client";

import { useEffect, useState, useRef } from "react";
import { colors } from "../../../lib/colors";
import InteractiveCircle2 from "../components/interactiveCercle2";
import * as Tone from "tone";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Page = () => {
  const router = useRouter();
  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: colors.primary }}
    >
      {/* --- Back button --- */}
      <div
        onClick={() => router.back()}
        className="absolute z-10 top-10 left-10 cursor-pointer"
      >
        <Image src="/arrow.svg" alt="arrow" width={50} height={50} />
      </div>
      <div
        className="flex justify-center relative items-center gap-10"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <DrumGrid />
      </div>
    </div>
  );
};

const NUM_STEPS = 8;
const INITIAL_BPM = 220;
const MIN_BPM = 60; // le BPM minimum
const MAX_BPM = 300;

const INITIAL_GRID = [
  [true, false, false, true, false, true, false, false], // Kick
  [false, false, true, false, false, false, true, false], // Snare
  [false, true, false, false, true, false, false, true], // Hi-hat
];

const DrumGrid = () => {
  const [grid, setGrid] = useState(INITIAL_GRID);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [bpm, setBpm] = useState(INITIAL_BPM);

  const gridRef = useRef(grid);
  gridRef.current = grid;

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
    transport.bpm.value = bpm;

    let step = 0;

    const repeat = (time: number) => {
      setCurrentStep(step);

      gridRef.current.forEach((row, rowIndex) => {
        if (row[step] && playersRef.current) {
          const name =
            rowIndex === 0 ? "kick" : rowIndex === 1 ? "snare" : "hihat";
          playersRef.current.player(name).start(time);
        }
      });

      step = (step + 1) % NUM_STEPS;
    };

    transport.scheduleRepeat(repeat, "4n");

    return () => {
      transport.cancel();
    };
  }, []);

  const handlePlay = async () => {
    await Tone.start();
    const transport = Tone.getTransport();

    if (!isPlaying) {
      transport.start();
    } else {
      transport.stop();
      setCurrentStep(null);
    }

    setIsPlaying(!isPlaying);
  };

  const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBpm = Number(e.target.value);
    setBpm(newBpm);
    Tone.getTransport().bpm.rampTo(newBpm, 0.1); // rampe douce pour éviter le bug
  };

  const paths = [
    "M150,30 C40,25 260,90 220,160 C180,230 100,220 70,180 C40,110 110,40 150,30 Z",
    "M150,40 C185,30 250,100 215,100 C180,200 95,230 65,180 C45,120 115,45 150,40 Z",
    "M150,35 C200,25 265,95 200,165 C180,230 95,245 68,185 C15,115 80,42 120,35 Z",
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Contrôles play + BPM */}
      <div
        className="flex items-center justify-center absolute bottom-0 w-full py-3 gap-6"
        style={{ backgroundColor: colors.tertiary }}
      >
        <Image
          src={isPlaying ? "/pause_black.svg" : "/play_black.svg"}
          alt="play-pause"
          width={45}
          height={45}
          className="cursor-pointer"
          onClick={handlePlay}
        />
        <div className="flex items-center gap-4">
          <div
            className="relative w-38 h-4 border border-black"
            style={{ backgroundColor: "transparent" }}
          >
            <div
              className="absolute left-0 top-0 h-full"
              style={{
                width: `${((bpm - MIN_BPM) / (MAX_BPM - MIN_BPM)) * 100}%`,
                backgroundColor: "black",
              }}
            />
            <input
              type="range"
              id="bpmSlider"
              min={MIN_BPM}
              max={MAX_BPM}
              value={bpm}
              onChange={(e) => {
                const newBpm = Number(e.target.value);
                setBpm(newBpm);
                Tone.getTransport().bpm.rampTo(newBpm, 0.1);
              }}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Grille */}
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2">
          {row.map((active, colIndex) => (
            <div
              key={colIndex}
              className="p-1 rounded-sm transition-colors duration-150"
              style={{
                backgroundColor:
                  currentStep === colIndex ? colors.tertiary : "transparent",
              }}
            >
              <InteractiveCircle2
                shouldBeFilled={active}
                pathD={paths[rowIndex]}
                onClick={() => toggleCell(rowIndex, colIndex)}
                isBouncing={currentStep === colIndex && active}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
