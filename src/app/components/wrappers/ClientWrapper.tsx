"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AudioPlayer from "../audioPlayer";
import { colors } from "../../../../lib/colors";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Hook toujours appelé
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rien render côté serveur
  if (!mounted) return null;

  if (isTabletOrMobile) {
    return (
      <div
        className="min-h-screen text-black font-raleway flex flex-col items-center justify-center p-10 text-2xl text-center"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="text-6xl">Hi,</div>
        <br />
        Sorry, this experience isn’t available on mobile or tablet yet...
        <br />
        <br />
        Try it on a computer or reach out to me here: <br />
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/victorpalle/"
          className="underline-hover ml-2"
        >
          LinkedIn
        </a>
        <span className="ml-2">&#x2022;</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/victorpalle"
          className="underline-hover ml-2"
        >
          Github
        </a>
        <span className="ml-2">&#x2022;</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fanlink.tv/viktorpallemusic"
          className="underline-hover ml-2"
        >
          Music
        </a>
      </div>
    );
  }

  return (
    <>
      {children}
      <AudioPlayer />
    </>
  );
}
