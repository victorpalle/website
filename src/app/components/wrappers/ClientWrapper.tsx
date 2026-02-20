"use client";
import React, { useState, useEffect } from "react";
import AudioPlayer from "../audioPlayer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {children}
      <div className="hidden lg:block">
        <AudioPlayer />
      </div>
    </>
  );
}
