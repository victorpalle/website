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
        className="absolute top-10 left-4 md:left-10 cursor-pointer z-20"
      >
        <Image src="/arrow.svg" alt="arrow" width={40} height={40} />
      </div>

      {/* --- Projects nav : masquée sur mobile --- */}
      <div className="hidden md:flex absolute top-10 right-4 md:right-10 text-black text-xl md:text-2xl lg:text-3xl font-raleway gap-2 md:gap-3 z-20">
        {menuItems.map((item, index) => (
          <Link key={item.href} className="underline-hover" href={item.href}>
            {index !== 0 && <span>&#x2022;</span>} {item.label}
          </Link>
        ))}
      </div>

      {/* --- Section 1 : Hero --- */}
      <div
        style={{ backgroundColor: colors.primary }}
        className="w-full min-h-[85vh] px-6 md:px-10 xl:px-30 pt-24 md:pt-30"
      >
        <div className="flex flex-col justify-center h-full text-black">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full tracking-tight text-5xl md:text-7xl xl:text-9xl"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-base md:text-lg w-full md:w-140 pt-6 md:pt-10 font-raleway ml-0 md:ml-2"
          >
            {subtitle}
          </motion.div>
        </div>
      </div>

      {/* --- Section 2 : Role / Responsibilities / URL + screenshot --- */}
      <div className="flex flex-col w-full px-6 md:px-10 xl:px-30 py-12 md:py-20">
        <div
          className="flex flex-col md:flex-row w-full md:h-70 font-raleway gap-8 md:gap-0 mb-10 md:mb-0"
          style={{ color: colors.primary }}
        >
          <div className="w-full md:w-1/3">
            <div className="text-2xl md:text-3xl mb-2">Role</div>
            <div>{role}</div>
          </div>
          <div className="w-full md:w-1/3 md:pr-10">
            <div className="text-2xl md:text-3xl mb-2">Responsibilities</div>
            <div>{responsibilities}</div>
          </div>
          <div className="flex flex-col md:items-end w-full md:w-1/3">
            <div className="text-2xl md:text-3xl mb-2">Url</div>
            <a href={urlHref} target="_blank" className="underline-hover-light break-all">
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
          className="w-full md:w-auto"
        />
      </div>

      {/* --- Section 3 : contenu spécifique à chaque projet --- */}
      <div className="min-h-screen flex flex-col w-full px-6 md:px-10 xl:px-30 pb-12 md:pb-20 xl:pb-30 gap-10 md:gap-16 xl:gap-30">
        {children}
      </div>
    </div>
  );
}
