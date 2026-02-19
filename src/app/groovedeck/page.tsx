import ProjectPageLayout from "../components/ProjectPageLayout";
import { colors } from "../../../lib/colors";

export default function Page() {
  return (
    <ProjectPageLayout
      title="Groove Deck"
      subtitle="Groove Deck is a musical video game where each card represents an audio loop. Some cards are generated using Sony CSL's generative AI, allowing players to easily create and play music. The goal is to make music accessible and fun for everyone."
      role="Software developer"
      responsibilities="Helped conceptualize the game, developed it using Godot Engine, and integrated Sony CSL's AI model to generate dynamic audio loops"
      urlHref="https://drive.google.com/file/d/13_D6UbQDQ7wdora08dNtHyPN_QN7vbiQ/view?usp=sharing"
      urlLabel="Download the game"
      screenshotSrc="/groovedeck.png"
      screenshotAlt="Groove Deck screenshot"
    >
      <div
        className="text-3xl font-raleway w-1/2"
        style={{ color: colors.primary }}
      >
        This project was a collaboration between Sony CSL Music Lab and
        composer Florin Gorgos. It was one of my most exciting but also
        challenging projects, as it involved developing a video game,
        conceptualizing the idea, and integrating the AI model.
      </div>
      <div className="w-full flex justify-end">
        <div
          className="flex text-end text-3xl font-raleway w-1/2"
          style={{ color: colors.primary }}
        >
          The project was presented at the Cultech Summit in Vienna, where the
          audience had the opportunity to play the game. The feedback was
          extremely positive, and it&apos;s always a pleasure to receive direct
          input from users.
        </div>
      </div>
      <video width="auto" height="auto" controls>
        <source
          src="https://nms7qcu6fuie2xus.public.blob.vercel-storage.com/Groovedeck-video.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </ProjectPageLayout>
  );
}
