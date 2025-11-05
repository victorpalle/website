"use client";
import { motion } from "framer-motion";
import { colors } from "../../lib/colors";
import Link from "next/link";
import Image from "next/image";
import InteractiveCircle1 from "./components/interactiveCercle1";

const menuItems = [
  { label: "Projects", href: "/projects" },
  //   { label: "Music", href: "/music" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Play", href: "/playground" },
];

export default function Home() {
  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex min-h-screen w-full px-50">
        {/* Colonne de gauche */}
        <div className="flex flex-col w-1/2 min-h-screen pt-70 font-raleway">
          <div className="text-black text-4xl">Viktor Palle</div>
          <div className="flex flex-col w-full">
            <div className="text-black text-xl">
              Full-stack developer &#x2022; Musician
            </div>
            <div className="text-black text-xl mt-10">
              I bridge music and technology, <br /> crafting creative interfaces
              and robust architectures <br />I leverage AI to deliver the best
              of technology to users, <br /> in the smartest and most engaging
              ways
            </div>
          </div>
        </div>

        {/* Colonne de droite */}
        <motion.div
          className="flex flex-col w-1/2 min-h-screen text-9xl text-black justify-center z-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3, // délai entre chaque texte
              },
            },
          }}
        >
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              className="flex justify-end"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9 }}
            >
              <Link
                href={item.href}
                className="underline-left-right text-black"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute right-100 top-[-100px] z-0">
          <InteractiveCircle1 hoverEffect={false} />
        </div>
        {/* <Image
          className="absolute right-0 top-[-100px] z-0"
          src="wave1.svg"
          width={500}
          height={400}
          alt="wave"
        /> */}
      </div>
    </div>
  );
}
