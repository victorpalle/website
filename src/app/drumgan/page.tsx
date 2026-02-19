import ProjectPageLayout from "../components/ProjectPageLayout";
import { colors } from "../../../lib/colors";

export default function Page() {
  return (
    <ProjectPageLayout
      title="DrumGAN"
      subtitle="Developed by the Music Team of Sony Computer Science Laboratories (Sony CSL – Paris), DrumGAN uses artificial intelligence to make drum sound design faster and more fun than before."
      role="Full stack developer"
      responsibilities="Created a Python API for Sony DrumGAN AI and a React/TS frontend with Tone.js, handling synchronized audio, animations, and a web drum machine."
      urlHref="https://drumgan.csl.sony.fr/"
      urlLabel="https://drumgan.csl.sony.fr/"
      screenshotSrc="/DrumGAN_Sc.png"
      screenshotAlt="DrumGAN screenshot"
    >
      <div
        className="text-3xl font-raleway w-1/2"
        style={{ color: colors.primary }}
      >
        Built during my first internship on Sony CSL&apos;s music team, this
        prototype connects to the DrumGAN AI and lets me create music
        interactively — it&apos;s so good I still use it today!
      </div>
      <div className="w-full h-[600px]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/LZ7K0IZ7KiA"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </ProjectPageLayout>
  );
}
