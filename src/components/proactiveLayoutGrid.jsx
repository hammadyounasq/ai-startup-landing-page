import p1 from "../assets/ps1.svg";
import p2 from "../assets/ps2.svg";
import p3 from "../assets/ps3.svg";
import p4 from "../assets/p4.svg";
import p5 from "../assets/p5.svg";
import p6 from "../assets/p6.svg";
import Z from "../assets/Z.png";
import avater from "../assets/avater.png";

const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className = "",
}) => (
  <div
    className={`w-full bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden ${className}`}
  >
    <div className="flex flex-col sm:flex-row">
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="relative w-full sm:w-1/2 h-48 sm:h-auto">
        <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
      </div>
    </div>
  </div>
);

export default function ProactiveLayoutGrid() {
  return (
    <div className="relative  mx-auto p-4 md:p-6 lg:p-8">
      {/* First Row - Three Equal Divs  */}
      {/* <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto mb-6">
        <div className="w-full flex flex-col justify-between    bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8]">
          <div className=" p-6">
            <div className="text-2xl font-bold mb-4">Multiplayer</div>
            <p className="text-gray-700">
              Collaborate efficiently with teammates in real time thanks to
              co-presence indicators, notes, and @mentions.
            </p>
          </div>
          <img src={p1} />
        </div>

        <div className="w-full flex flex-col justify-between  bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8]">
          <div className=" p-6">
            <div className="text-2xl font-bold mb-4">Lightning fast</div>

            <p className="text-gray-700">
              Win time back with powerful macros, nonexistent load times, and
              simple shortcuts that put your entire Inbox a Cmd+K away.
            </p>
          </div>
          <div className="flex justify-end">
            <img src={p2} />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between  bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8]">
          <div className=" p-6">
            <div className="text-2xl font-bold mb-4">Team management</div>

            <p className="text-gray-700">
              Get more done by optimizing operations with live dashboards,
              reporting, work management tools, and more.
            </p>
          </div>
          <div className="flex justify-end">
            <img src={p3} />
          </div>
        </div>
      </div> */}
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="w-full flex flex-col justify-between bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Multiplayer</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Collaborate efficiently with teammates in real time thanks to
              co-presence indicators, notes, and @mentions.
            </p>
          </div>
          <div className="mt-auto">
            <img
              src={p1 || "/placeholder.svg"}
              alt="Multiplayer feature"
              width={400}
              height={200}
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Lightning fast
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Win time back with powerful macros, nonexistent load times, and
              simple shortcuts that put your entire Inbox a Cmd+K away.
            </p>
          </div>
          <div className="mt-auto">
            <img
              src={p2 || "/placeholder.svg"}
              alt="Lightning fast feature"
              width={400}
              height={200}
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Team management
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Get more done by optimizing operations with live dashboards,
              reporting, work management tools, and more.
            </p>
          </div>
          <div className="mt-auto">
            <img
              src={p3 || "/placeholder.svg"}
              alt="Team management feature"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div> */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {[
          {
            title: "Multiplayer",
            description:
              "Collaborate efficiently with teammates in real time thanks to co-presence indicators, notes, and @mentions.",
            image: p1,
          },
          {
            title: "Lightning fast",
            description:
              "Win time back with powerful macros, nonexistent load times, and simple shortcuts that put your entire Inbox a Cmd+K away.",
            image: p2,
          },
          {
            title: "Team management",
            description:
              "Get more done by optimizing operations with live dashboards, reporting, work management tools, and more.",
            image: p3,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-between bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden"
          >
            <div className="p-6 flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
            <div className="w-full aspect-[2/1]">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.title} feature`}
                className="w-full "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <FeatureCard
              title="Configurable"
              description="Add help content directly into your product without engineering resources using our no-code UI."
              imageSrc={p4}
              imageAlt="Configurable feature"
            />
            <FeatureCard
              title="Omnichannel"
              description="Automatically trigger an in-app chat, email, or SMS message when a customer needs help."
              imageSrc={p5}
              imageAlt="Omnichannel feature"
            />
          </div>
          {/* Right column */}
          <div className=" relative w-full h-full flex flex-col  bg-gradient-to-b from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden">
            <div className="p-6 ">
              <div className="text-2xl font-bold mb-4">Ticketing</div>
              <p className="text-gray-700">
                Easily collaborate with colleagues to quickly solve complex
                problems, as well as allow customers to track progress in real
                time.
              </p>
            </div>

            <div className=" absolute bottom-0  w-full h-auto flex justify-center">
              <img src={p6} className="w-full h-[200px] object-cover" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid gap-6 md:grid-cols-2   max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="w-full bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9]  rounded-lg border border-[#D3D5D8]">
            <div className="p-0 flex overflow-hidden">
              <div className=" p-6">
                <div className="p-0">
                  <div className="text-2xl font-bold mb-4">Configurable</div>
                </div>
                <p className="text-gray-700">
                  Add help content directly into your product without
                  engineering resources using our no-code UI.
                </p>
              </div>
              <img src={p4} />
            </div>
          </div>

          <div className="w-full  h-full bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9]  rounded-lg border border-[#D3D5D8]">
            <div className=" relative p-0 flex overflow-hidden  ">
              <div className="p-9">
                <div className="p-0">
                  <div className="text-2xl font-bold mb-4">Omnichannel</div>
                </div>
                <p className="text-gray-700">
                  Automatically trigger an in-app chat, email, or SMS message
                  when a customer needs help.
                </p>
              </div>
              <img src={p5} className="pl-10" />
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-gradient-to-b from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden">
          <div className="p-0">
            <div className="p-6 h-full">
              <div className="p-0">
                <div className="text-2xl font-bold mb-4">Ticketing</div>
              </div>
              <p className="text-gray-700">
                Easily collaborate with colleagues to quickly solve complex
                problems, as well as allow customers to track progress in real
                time.
              </p>
            </div>
          </div>
          <img src={p6} />
        </div>
      </div> */}

      {/* Testimonial section */}
      <div className="pt-10 text-center max-w-xl mx-auto space-y-8">
        <img
          src={Z}
          alt="Zilch logo"
          width={60}
          height={40}
          className="mx-auto"
        />
        <blockquote className="text-xl font-normal">
          &quot;Our bot deflection rate with our previous customer service
          solution was 5–10%. With Intercom, we achieved
          <span className="font-bold">
            65% bot deflection within just one week{" "}
          </span>
          of going live.&quot;
        </blockquote>
        <div className="flex items-center justify-center ">
          <img src={avater} width={60} height={40} />

          <div className="pl-4 text-left">
            <div className="font-semibold">Stuart Sykes</div>
            <div className="text-sm text-muted-foreground">
              VP of Service Operations, Zilch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
