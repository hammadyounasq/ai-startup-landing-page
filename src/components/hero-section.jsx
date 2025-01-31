import { Button } from "../components/ui/button";
import heroimage from "../assets/heroimage.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import b from "../assets/bottom.png";
const companylogo = [
  { image: c1 },
  { image: c2 },
  { image: c3 },
  { image: c4 },
  { image: c5 },
  { image: c6 },
  { image: c7 },
  { image: c8 },
];

export function HeroSection() {
  return (
    <section className=" relative pt-32 pb-16 bg-[#0e1622] min-h-screen ">
      <div className=" flex flex-col justify-center items-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white mb-6">
          The <span className="text-[#E6B45E]">only</span> AI customer service
          solution you need
        </h1>
        <p className="max-w-2xl text-lg text-gray-400 mb-8">
          Resolve issues faster and boost customer satisfaction—all while
          reducing team workload—with the <em>only</em> customer service
          solution you&apos;ll ever need.
        </p>
        <div className="flex gap-4 mb-16">
          <Button
            size="lg"
            className="bg-[#0052FF] hover:bg-[#0040CC] text-white"
          >
            Start free trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-700 text-white hover:bg-gray-800"
          >
            View demo
          </Button>
        </div>
        <div className="relative w-full max-w-5xl">
          <img
            src={heroimage}
            alt="Intercom Dashboard"
            width={1200}
            height={800}
            className="rounded-lg border border-gray-800 shadow-2xl"
          />
        </div>
        <div className="mt-20 mb-20">
          <p className="text-sm font-medium text-gray-400 mb-8">
            TRUSTED BY +25,000 BUSINESSES
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center opacity-70">
            {/* Replace with actual company logos */}
            {companylogo.map((e, i) => (
              <img key={i} src={e.image} className="object-cove  w-[9rem]   " />
            ))}
          </div>
        </div>
      </div>
      <div className=" absolute  bottom-[-0.1rem] max-w-full">
        <img src={b} alt="Intercom Dashboard" />
      </div>
    </section>
  );
}
