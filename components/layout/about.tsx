import { AboutDefinition } from "@/definition";

export function About({ background, about, awards }: AboutDefinition) {
  return (
    <section
      className="flex flex-col max-w-4xl px-4 sm:px-6 lg:px-8 xl:px-0"
      id="about"
    >
      <div className="mb-8" id="about_text">
        <h2 className="mb-3 text-lg font-bold tracking-tight sm:text-4xl">{background}</h2>
        <p className="max-w-2xl">{about}</p>
      </div>
      <div className="flex flex-row gap-10" id="about_content">
        {/* <div>
          <h2 className="mb-3">Others</h2>
          <p className="max-w-lg text-[#7a7a87]">{awards}</p>
        </div> */}
        {/* <div>
          <h2 className="mb-3 text-lg">Blurb</h2>
        </div> */}
      </div>
    </section>
  );
}

export default About;
