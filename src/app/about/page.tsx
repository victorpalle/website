"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { colors } from "../../../lib/colors";
import InteractiveCircle3 from "../components/interactiveCercle3";

const downloadUrl =
  "https://nms7qcu6fuie2xus.public.blob.vercel-storage.com/CV_VICTOR_PALLE_EN.pdf";

export const Page = () => {
  const router = useRouter();

  const handleClickOnDownload = async () => {
    if (!downloadUrl) return;

    const response = await fetch(downloadUrl);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = downloadUrl.split("/").pop() || "download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: colors.secondary, scrollBehavior: "smooth" }}
    >
      {/* --- Back button --- */}
      <div
        onClick={() => router.back()}
        className="absolute top-10 left-10 cursor-pointer"
      >
        <Image src="/arrow.svg" alt="arrow" width={50} height={50} />
      </div>

      {/* --- Title --- */}
      <div className="absolute top-10 right-10 text-black text-3xl font-raleway">
        About
      </div>

      {/* --- Section 1 --- */}
      <div
        style={{ backgroundColor: colors.primary }}
        className="flex lg:p-10 xl:px-50 lg:pt-30 xl:pt-50 lg:pb-30 xl:pb-30 h-[90vh] justify-between"
      >
        <div className="flex flex-col z-10">
          {/* Animation du titre */}
          <motion.div
            className="text-8xl text-black"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hi, <br />
            I&apos;m Viktor
          </motion.div>

          {/* Animation du texte */}
          <motion.div
            className="text-xl font-raleway text-black mt-10 w-96"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            I’m a full-stack developer and a musician based in Paris (as you can
            see in the photo), <br /> just out of five years of intensive
            studies in software development.
          </motion.div>
        </div>

        {/* Image principale */}
        <Image
          src="/selfie.png"
          alt="selfie"
          width={300}
          height={300}
          className="rounded-xl"
        />
        <div className="absolute lg:right-50 xl:right-120 top-[-100px] z-10">
          <InteractiveCircle3
            label="Download my resume"
            hoverEffect
            onClick={handleClickOnDownload}
          />
        </div>
      </div>

      {/* --- Section 2 --- */}
      <div className="flex font-raleway w-full min-h-screen lg:px-10 xl:px-30 p-30">
        <div className="flex flex-col w-1/2">
          <div
            className="text-2xl font-raleway"
            style={{ color: colors.primary }}
          >
            Right after high school, I was deeply into math and algorithms, so I
            joined a Mathematics and Computer Science program at Paris-Dauphine
            University.
          </div>
          <div className="text-6xl mt-20">Université Paris Dauphine</div>
          <div className="text-xl">September 2015 - June 2017</div>
        </div>

        <div className="w-1/2 flex items-end justify-end">
          <Image
            src="/dauphine.jpg"
            alt="dauphine"
            width={400}
            height={400}
            className="rounded-xl mt-3 z-10"
          />
          <Image
            className="absolute right-[-10px] z-0"
            src="wave3.svg"
            width={500}
            height={500}
            alt="wave"
            style={{ color: colors.primary }}
          />
        </div>
      </div>
      {/* --- Section 3 --- */}
      <div
        className="flex relative font-raleway w-full min-h-screen lg:px-10 xl:px-30 p-30 text-black"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="flex flex-col w-1/2">
          <div className="text-2xl font-raleway">
            Since I was a kid, I’d had a musical project that eventually took
            most of my time. I signed with Universal and spent three years
            making music professionally, discovering so much about the creative
            world along the way.
          </div>
          <div className="text-6xl mt-20">Universal Music</div>
          <div className="text-xl">August 2017 - June 2020</div>
        </div>

        <div className="w-1/2 flex items-end justify-end">
          <Image
            src="/viktor-after-clip.jpg"
            alt="dauphine"
            width={500}
            height={500}
            className="rounded-xl mt-3 z-10"
          />
          <Image
            className="absolute right-[-100px] z-0"
            src="wave2.svg"
            width={500}
            height={500}
            alt="wave"
            style={{ color: colors.primary }}
          />
          <div className="flex absolute left-20 bottom-5 z-0">
            <Image
              className=""
              src="drawed_arrow.svg"
              width={100}
              height={100}
              alt="wave"
            />
            <div className="font-raleway">That&apos;s my music playing down here</div>
          </div>
        </div>
      </div>
      {/* --- Section 4 --- */}
      <div className="flex font-raleway relative w-full min-h-screen lg:px-10 xl:px-30 p-30">
        <div className="flex flex-col w-1/2">
          <div className="text-2xl font-raleway">
            Then came the lockdown, and with it, a growing frustration. I felt I
            hadn’t fully explored what technology could offer, both for music
            and beyond. That’s when I truly discovered the world of web and
            software development, which has since become a real passion of mine.
          </div>
          <div className="text-6xl mt-20">Epitech Paris</div>
          <div className="text-xl">Septembre 2020 - June 2025</div>
        </div>

        <div className="w-1/2 flex items-end justify-end">
          <Image
            src="/epitech.jpg"
            alt="dauphine"
            width={400}
            height={400}
            className="rounded-xl mt-3 z-10"
          />
          <Image
            className="absolute right-[300px] z-0"
            src="wave3.svg"
            width={500}
            height={500}
            alt="wave"
            style={{ color: colors.primary }}
          />
        </div>
        <div className="absolute top-0 right-0">
          <InteractiveCircle3 onClick={() => router.push("/")} label="Go to main menu" labelColor={colors.primary} strokeColor={colors.primary} />
        </div>
      </div>
    </div>
  );
};

export default Page;
