import { AboutDefinition } from "@/definition";

export function About({ background, about, awards }: AboutDefinition) {
  return (
    <section className="flex flex-col sm:py-8 mx-4 sm:mx-24" id="about">
      <div className="mb-16" id="about_text">
        <h2 className="mb-3 text-lg">{background}</h2>
        <p className="max-w-2xl text-[#7a7a87]">{about}</p>
      </div>
      <div className="flex flex-row gap-10 mb-16" id="about_content">
        <div>
          <h2 className="mb-3 text-lg">Achievement</h2>
          <p className="max-w-lg text-[#7a7a87]">{awards}</p>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Thought</h2>
        </div>
      </div>
    </section>
  );
}

export default About;
