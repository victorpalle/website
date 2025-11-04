"use client";

import Image from "next/image";
import { colors } from "../../../lib/colors";
import { useMemo, useRef, useState, useEffect } from "react";
import { radioAudios } from "../../../lib/radioAudios";

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [randomAudioIndex, setRandomAudioIndex] = useState<number | null>(null);

  useEffect(() => {
    setRandomAudioIndex(Math.floor(Math.random() * radioAudios.length));
  }, []);


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const iconSrc = useMemo(() => {
    return isPlaying ? "/pause.svg" : "/play.svg";
  }, [isPlaying]);
  
  if (randomAudioIndex === null) return null;

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Met à jour le temps en cours

  // Formater le temps (m:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div
      className="fixed bottom-0 w-full h-20 flex items-center px-10 z-50 gap-10"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="flex items-center gap-6">
        <Image
          src={iconSrc}
          alt="play-pause"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={togglePlay}
        />
        <div className="flex text-lg gap-2">
          <span className="font-raleway font-bold">{radioAudios[randomAudioIndex].title}</span>
          <span>&#x2022;</span>
          <span className="font-raleway">{radioAudios[randomAudioIndex].artist}</span>
        </div>
      {/* <div className="flex">
        <div className="text-lg font-raleway">{formatTime(currentTime)}</div>
      </div> */}
      </div>

      <audio ref={audioRef} src={radioAudios[randomAudioIndex].url} loop />
    </div>
  );
};

export default AudioPlayer;
