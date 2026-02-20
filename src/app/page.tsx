"use client";
import { motion } from "framer-motion";
import { colors } from "../../lib/colors";
import Link from "next/link";
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
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex flex-col lg:flex-row min-h-screen w-full px-6 md:px-10 xl:px-50">
        {/* Left: name + description */}
        <div className="flex flex-col w-full lg:w-1/2 pt-16 lg:pt-70 font-raleway">
          <div className="text-black text-3xl lg:text-4xl">Viktor Palle</div>
          <div className="flex flex-col w-full">
            <div className="text-black text-base lg:text-xl mt-1 lg:mt-0">
              Full-stack developer &#x2022; Musician
            </div>
            <div className="text-black text-sm lg:text-xl mt-5 lg:mt-10">
              I bridge music and technology, <br /> crafting creative interfaces
              and robust architectures <br />I leverage AI to deliver the best
              of technology to users, <br /> in the smartest and most engaging
              ways
            </div>
          </div>
        </div>

        {/* Right: menu */}
        <motion.div
          className="flex flex-col w-full lg:w-1/2 text-5xl md:text-7xl lg:text-9xl text-black lg:justify-center z-10 pt-8 lg:pt-0"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              className="flex lg:justify-end"
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

        {/* Circle: desktop only */}
        <div className="hidden lg:block absolute right-100 top-[-100px] z-0">
          <InteractiveCircle1 hoverEffect={false} />
        </div>
      </div>
    </div>
  );
}
