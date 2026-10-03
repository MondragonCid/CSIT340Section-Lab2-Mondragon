import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:mondragonjacerrein@gmail.com"
          text="mondragonjacerrein@gmail.com"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/MondragonCid"
          text="github.com/MondragonCid"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/cid-mondragon-12313037a/"
          text="linkedin.com/in/cid-mondragon"
        />
      </ul>
    </section>
  );
}