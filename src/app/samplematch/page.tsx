import ProjectPageLayout from "../components/ProjectPageLayout";
import { colors } from "../../../lib/colors";

export default function Page() {
  return (
    <ProjectPageLayout
      title="Sample Match"
      subtitle="Developed by the Music Team of Sony Computer Science Laboratories (Sony CSL – Paris), Sample Match is the first AI-sample library that fits your musical context."
      role="Full-stack developer"
      responsibilities="Built Python backend to query AI model, React/TS frontend, integrated OS sample library, managed and optimized large audio datasets."
      urlHref="https://samplematch.csl.sony.fr/"
      urlLabel="https://samplematch.csl.sony.fr/"
      screenshotSrc="/SampleMatch_Sc.png"
      screenshotAlt="Sample Match screenshot"
    >
      <div
        className="text-3xl font-raleway w-1/2"
        style={{ color: colors.primary }}
      >
        Had a lot of fun working on this project. Creating a tool that
        organizes a user&apos;s samples felt super original and rewarding.
      </div>
      <div className="w-full h-[600px]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/n1n8ZxPK6F4"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </ProjectPageLayout>
  );
}
