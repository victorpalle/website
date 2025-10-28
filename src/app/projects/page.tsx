"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { colors } from "../../../lib/colors";
import { motion } from "framer-motion";
import Link from "next/link";
import menuItems from "../../../lib/projects";

export const Page = () => {
  const router = useRouter();
  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: colors.primary }}
    >
      <div
        onClick={() => router.push("/")}
        className="absolute top-10 left-10 cursor-pointer"
      >
        <Image src="/arrow.svg" alt="arrow" width={50} height={50} />
      </div>
      <div className="absolute top-10 right-10 text-black text-3xl font-raleway">
        Projects
      </div>
      <div className="flex w-full min-h-screen p-20 items-center">
        <div className="w-full min-h-screen">
          <motion.div
            className="flex flex-col min-h-screen text-9xl text-black justify-center"
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
                className="flex"
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
        </div>
        <Image
          className="absolute right-0"
          src="wave2.svg"
          width={500}
          height={400}
          alt="wave"
        />
      </div>
    </div>
  );
};

export default Page;
