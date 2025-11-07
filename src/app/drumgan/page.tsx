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
        onClick={() => router.back()}
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
        className="w-full h-[85vh] lg:px-10 xl:px-30 pt-30"
      >
        <div className="flex flex-col justify-center h-full text-black text-9xl">
          {/* Animation du titre */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full tracking-tight"
          >
            DrumGAN
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
            className="text-lg w-140 pt-10 font-raleway ml-2"
          >
            Developed by the Music Team of Sony Computer Science Laboratories
            (Sony CSL – Paris), DrumGAN uses artificial intelligence to make
            drum sound design faster and more fun than before.
          </motion.div>
        </div>
      </div>

      {/* --- Section 2 --- */}
      <div className="flex flex-col w-full p-30 lg:px-10 xl:px-30 min-h-screen">
        <div
          className="flex w-full h-70 font-raleway"
          style={{ color: colors.primary }}
        >
          <div className="w-1/3">
            <div className="text-3xl mb-2">Role</div>
            <div>Full stack developer</div>
          </div>
          <div className="w-1/3 pr-10">
            <div className="text-3xl mb-2">Responsibilities</div>
            <div>
              Created a Python API for Sony DrumGAN AI and a React/TS frontend
              with Tone.js, handling synchronized audio, animations, and a web
              drum machine.
            </div>
          </div>
          <div className="flex flex-col items-end w-1/3">
            <div className="text-3xl mb-2">Url</div>
            <a
              href="https://drumgan.csl.sony.fr/"
              target="_blank"
              className="underline-hover-light"
            >
              https://drumgan.csl.sony.fr/
            </a>
          </div>
        </div>
        <Image
          src="/DrumGAN_Sc.png"
          alt="drumgan"
          width={1600}
          height={900}
          priority
          style={{ borderRadius: "20px" }}
        />
      </div>
      {/* --- Section 3 --- */}
      <div className="min-h-screen flex flex-col w-full lg:px-10 xl:px-30 pb-30 gap-30">
        <div
          className="text-3xl font-raleway w-1/2"
          style={{ color: colors.primary }}
        >
          Built during my first internship on Sony CSL’s music team, this
          prototype connects to the DrumGAN AI and lets me create music
          interactively — it’s so good I still use it today !
        </div>
        <div className="w-full h-[600px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/LZ7K0IZ7KiA"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
