import ProjectPageLayout from "../components/ProjectPageLayout";
import { colors } from "../../../lib/colors";
import Image from "next/image";

export default function Page() {
  return (
    <ProjectPageLayout
      title="Sonar"
      subtitle="Sonar was built by Goodwave, a startup connecting patrons with associations."
      role="Web developer"
      responsibilities="Built the React frontend and login system with API integration"
      urlHref="https://www.sonar.so/"
      urlLabel="https://www.sonar.so/"
      screenshotSrc="/sonar.png"
      screenshotAlt="Sonar screenshot"
    >
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
          It&apos;s also where I learned the foundations of clean code, testing,
          GitHub workflows, and collaborative development with other engineers.
        </div>
      </div>
      <Image
        src="/sonar2.png"
        alt="Sonar second screenshot"
        width={1600}
        height={900}
        style={{ borderRadius: "20px" }}
      />
    </ProjectPageLayout>
  );
}
