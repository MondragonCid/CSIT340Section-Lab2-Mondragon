export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-2 text-stone-600">Say hi.</p>
      <ul className="mt-8 space-y-3">
        <li>
          <span className="inline-block w-24 text-sm text-stone-500">Email</span>
          <a
            href="mailto:juan.delacruz@cit.edu"
            className="font-medium hover:underline"
          >
            juan.delacruz@cit.edu
          </a>
        </li>
        <li>
          <span className="inline-block w-24 text-sm text-stone-500">GitHub</span>
          <a
            href="https://github.com/juandelacruz"
            className="font-medium hover:underline"
          >
            github.com/juandelacruz
          </a>
        </li>
        <li>
          <span className="inline-block w-24 text-sm text-stone-500">LinkedIn</span>
          <a
            href="https://linkedin.com/in/juandelacruz"
            className="font-medium hover:underline"
          >
            linkedin.com/in/juandelacruz
          </a>
        </li>
      </ul>
    </section>
  );
}
