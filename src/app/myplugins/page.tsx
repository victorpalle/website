import ProjectPageLayout from "../components/ProjectPageLayout";
import { colors } from "../../../lib/colors";

export default function Page() {
  return (
    <ProjectPageLayout
      title="Plug-ins"
      subtitle="Alongside my dev work, I build audio plug-ins — tools I wish had existed when I was making music professionally. Each one is designed to be simple, musical, and immediately useful."
      role="Developer"
      responsibilities="Designed and developed Viktor Knob from scratch — UI, DSP logic, and packaging as a cross-platform VST3 plug-in."
      urlHref="https://viktorhythm7.gumroad.com/l/wseoge"
      urlLabel="Get Viktor Knob"
      screenshotSrc="/viktor-knob.png"
      screenshotAlt="Viktor Knob plug-in screenshot"
      screenshotWidth={800}
      screenshotHeight={500}
    >
      <div
        className="text-5xl font-raleway tracking-tight"
        style={{ color: colors.primary }}
      >
        Viktor Knob
      </div>
      <div
        className="text-3xl font-raleway w-1/2"
        style={{ color: colors.primary }}
      >
        ViktorKnob captures the essence of that perfect bedroom-recorded vibe in
        a single control. Its sound is warm, soulful, and textured, with subtle
        modulation and a mid-focused EQ that sits perfectly in any mix. The
        plugin is intentionally simple: one knob, the Viktor Knob, that goes
        from completely dry to hilariously broken. At moderate settings, it adds
        that perfect lo-fi polish to guitars, pianos, and drums — making them
        sound like they belong on a cozy, intimate record.
      </div>
      <div className="w-full flex justify-end">
        <div
          className="flex text-end text-3xl font-raleway w-1/2"
          style={{ color: colors.primary }}
        >
          More plug-ins coming soon.
        </div>
      </div>
    </ProjectPageLayout>
  );
}
