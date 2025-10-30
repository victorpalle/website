"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "../../../lib/colors";
import Link from "next/link";
import menuItems from "../../../lib/projects";

export const Page = () => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#141414" }}
    >
      {/* --- Back button --- */}
      <div
        onClick={() => router.push("/")}
        className="absolute top-10 left-10 cursor-pointer"
      >
        <Image src="/arrow.svg" alt="arrow" width={50} height={50} />
      </div>

      {/* --- Projects text --- */}
      <div className="flex absolute top-10 right-10 text-black text-3xl font-raleway gap-3">
        {menuItems.map((item, index) => (
          <Link key={index} className="underline-hover" href={item.href}>
            {index != 0 && <span>&#x2022;</span>} {item.label}
          </Link>
        ))}
      </div>

      {/* --- Section 1 --- */}
      <div
        style={{ backgroundColor: colors.primary }}
        className="w-full h-[85vh] px-30 pt-30"
      >
        <div className="flex flex-col justify-center h-full text-black text-9xl">
          {/* Animation du titre */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full tracking-tight"
          >
            Groove Deck
          </motion.div>

          {/* Animation du texte */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-lg font-raleway w-140 pt-10 ml-2"
          >
            Groove Deck is a musical video game where each card represents an
            audio loop. Some cards are generated using Sony CSL’s generative AI,
            allowing players to easily create and play music. The goal is to
            make music accessible and fun for everyone.
          </motion.div>
        </div>
      </div>

      {/* --- Section 2 --- */}
      <div className="flex flex-col w-full p-30 min-h-screen">
        <div
          className="flex w-full h-70 font-raleway"
          style={{ color: colors.primary }}
        >
          <div className="w-1/3">
            <div className="text-3xl mb-2">Role</div>
            <div>Software developer</div>
          </div>
          <div className="w-1/3 pr-10">
            <div className="text-3xl mb-2">Responsibilities</div>
            <div>
              Helped conceptualize the game, developed it using Godot Engine,
              and integrated Sony CSL’s AI model to generate dynamic audio loops
            </div>
          </div>
          <div className="w-1/3">
            <div className="text-3xl mb-2">Url</div>
            <a
              href="https://drive.google.com/file/d/13_D6UbQDQ7wdora08dNtHyPN_QN7vbiQ/view?usp=sharing"
              target="_blank"
              className="underline-hover-light"
            >
              Download the game
            </a>
          </div>
        </div>
        <Image
          src="/groovedeck.png"
          alt="drumgan"
          width={1600}
          height={900}
          priority
          style={{ borderRadius: "20px" }}
        />
      </div>
      {/* --- Section 3 --- */}
      <div className="min-h-screen flex flex-col w-full px-30 pb-30 gap-30">
        <div
          className="text-3xl font-raleway w-1/2"
          style={{ color: colors.primary }}
        >
          This project was a collaboration between Sony CSL Music Lab and
          composer Florin Gorgos. It was one of my most exciting but also
          challenging projects, as it involved developing a video game,
          conceptualizing the idea, and integrating the AI model.
        </div>
        <div className="w-full flex justify-end">
          <div
            className="flex text-end text-3xl font-raleway w-1/2"
            style={{ color: colors.primary }}
          >
            The project was presented at the Cultech Summit in Vienna, where the
            audience had the opportunity to play the game. The feedback was
            extremely positive, and it’s always a pleasure to receive direct
            input from users.
          </div>
        </div>
        {/* <Image
          src="/sonar2.png"
          alt="drumgan"
          width={1600}
          height={900}
          priority
          style={{ borderRadius: "20px" }}
        /> */}
      </div>
    </div>
  );
};

export default Page;
