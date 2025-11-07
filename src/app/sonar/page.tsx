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
        className="w-full h-[85vh] lg:px-10 xl:px-30  pt-30"
      >
        <div className="flex flex-col justify-center h-full text-black text-9xl">
          {/* Animation du titre */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full tracking-tight"
          >
            Sonar
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
            Sonar was built by Goodwave, a startup connecting patrons with
            associations.
          </motion.div>
        </div>
      </div>

      {/* --- Section 2 --- */}
      <div className="flex flex-col w-full p-30 lg:px-10 xl:px-30  min-h-screen">
        <div
          className="flex w-full h-70 font-raleway"
          style={{ color: colors.primary }}
        >
          <div className="w-1/3">
            <div className="text-3xl mb-2">Role</div>
            <div>Web developer</div>
          </div>
          <div className="w-1/3 pr-10">
            <div className="text-3xl mb-2">Responsibilities</div>
            <div>
              Built the React frontend and login system with API integration
            </div>
          </div>
          <div className="flex flex-col items-end w-1/3">
            <div className="text-3xl mb-2">Url</div>
            <a
              href="https://www.sonar.so/"
              target="_blank"
              className="underline-hover-light"
            >
              https://www.sonar.so/
            </a>
          </div>
        </div>
        <Image
          src="/sonar.png"
          alt="drumgan"
          width={1600}
          height={900}
          priority
          style={{ borderRadius: "20px" }}
        />
      </div>
      {/* --- Section 3 --- */}
      <div className="min-h-screen flex flex-col w-full lg:px-10 xl:px-30  pb-30 gap-30">
        <div
          className="text-3xl font-raleway w-1/2"
          style={{ color: colors.primary }}
        >
          Worked on Sonar during my first developer internship. I learned all my
          React and NestJS fundamentals in this highly formative project.
        </div>
        <div className="w-full flex justify-end">
          <div
            className="flex text-end text-3xl font-raleway w-1/2"
            style={{ color: colors.primary }}
          >
            It’s also where I learned the foundations of clean code, testing,
            GitHub workflows, and collaborative development with other
            engineers.
          </div>
        </div>
        <Image
          src="/sonar2.png"
          alt="drumgan"
          width={1600}
          height={900}
          priority
          style={{ borderRadius: "20px" }}
        />
      </div>
    </div>
  );
};

export default Page;
