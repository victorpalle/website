"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "../../../lib/colors";
import Link from "next/link";
import menuItems from "../../../lib/projects";

interface ProjectPageLayoutProps {
  title: string;
  subtitle: string;
  role: string;
  responsibilities: string;
  urlHref: string;
  urlLabel: string;
  screenshotSrc: string;
  screenshotAlt: string;
  screenshotWidth?: number;
  screenshotHeight?: number;
  children: React.ReactNode;
}

export default function ProjectPageLayout({
  title,
  subtitle,
  role,
  responsibilities,
  urlHref,
  urlLabel,
  screenshotSrc,
  screenshotAlt,
  screenshotWidth = 1600,
  screenshotHeight = 900,
  children,
}: ProjectPageLayoutProps) {
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

      {/* --- Projects nav --- */}
      <div className="flex absolute top-10 right-10 text-black text-3xl font-raleway gap-3">
        {menuItems.map((item, index) => (
          <Link key={item.href} className="underline-hover" href={item.href}>
            {index !== 0 && <span>&#x2022;</span>} {item.label}
          </Link>
        ))}
      </div>

      {/* --- Section 1 : Hero --- */}
      <div
        style={{ backgroundColor: colors.primary }}
        className="w-full h-[85vh] lg:px-10 xl:px-30 pt-30"
      >
        <div className="flex flex-col justify-center h-full text-black text-9xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full tracking-tight"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-lg w-140 pt-10 font-raleway ml-2"
          >
            {subtitle}
          </motion.div>
        </div>
      </div>

      {/* --- Section 2 : Role / Responsibilities / URL + screenshot --- */}
      <div className="flex flex-col w-full p-30 lg:px-10 xl:px-30 min-h-screen">
        <div
          className="flex w-full h-70 font-raleway"
          style={{ color: colors.primary }}
        >
          <div className="w-1/3">
            <div className="text-3xl mb-2">Role</div>
            <div>{role}</div>
          </div>
          <div className="w-1/3 pr-10">
            <div className="text-3xl mb-2">Responsibilities</div>
            <div>{responsibilities}</div>
          </div>
          <div className="flex flex-col items-end w-1/3">
            <div className="text-3xl mb-2">Url</div>
            <a href={urlHref} target="_blank" className="underline-hover-light">
              {urlLabel}
            </a>
          </div>
        </div>
        <Image
          src={screenshotSrc}
          alt={screenshotAlt}
          width={screenshotWidth}
          height={screenshotHeight}
          style={{ borderRadius: "20px" }}
        />
      </div>

      {/* --- Section 3 : contenu spécifique à chaque projet --- */}
      <div className="min-h-screen flex flex-col w-full lg:px-10 xl:px-30 pb-30 gap-30">
        {children}
      </div>
    </div>
  );
}
