import { Button } from "../components/ui/button";
import chat from "../assets/chat.png";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import Z from "../assets/Z.png";
import avater from "../assets/avater.png";
import check from "../assets/chectblue.svg";

export default function LayoutGrid() {
  return (
    <div className="relative    mx-auto p-4 md:p-6 lg:p-8 ">
      <div className="absolute z-[0] w-full h-[10rem]  top-[10%] left-[0%]  bottom-20 blur-[3rem]  bg-[#CCF0F7] bg-opacity-100  " />

      <div className="relative max-w-6xl mx-auto px-4  pt-20 pb-32">
        {/* Header section */}
        <div className="text-center space-y-6 mb-16 bg-gradient-to-tr">
          <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
            AUTOMATION
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-3xl mx-auto">
            Automate conversations with the power of AI
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reduce support volumes and increase customer satisfaction in minutes
            with Intercom&apos;s AI-powered chatbots and automation tools.
          </p>
          <Button
            variant="link"
            className="text-blue-600 hover:text-blue-700 group"
          >
            Learn more about automation
            {/* <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
          </Button>
        </div>
        {/* Chat preview */}
        <div className="relative min-h-[15rem] sm:min-h-[25rem] md:min-h-[30rem] lg:min-h-[35rem] rounded-3xl overflow-hidden flex justify-center bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] backdrop-blur-[10rem] border border-[#D3D5D8] mb-8 sm:mb-12 md:mb-16 lg:mb-[10rem]">
          <div className="absolute bottom-0 w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-0">
            <img
              src={chat || "/placeholder.svg"}
              width={1062}
              height={524}
              alt="Chat illustration"
              className="w-full h-auto object-contain max-w-[100%] mx-auto"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-1 max-w-6xl ">
          <div className=" flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-12 h-12  mr-4 ">
              <img src={check} />
            </div>
            <h3 className="font-normal">
              Unlock the best AI-powered customer service tools in minutes
            </h3>
          </div>
          <div className="flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-10 h-10  mr-4 ">
              <img src={check} />
            </div>
            <h3 className="font-normal ">
              Lower your costs with more efficient support teams
            </h3>
          </div>
          <div className="flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-10 h-10  mr-4 ">
              <img src={check} />
            </div>
            <h3 className="font-normal ">
              Scale support without sacrificing customer experience
            </h3>
          </div>
        </div>
      </div>
      {/* First Row */}
      <div className="grid gap-6 md:grid-cols-2 mb-6 max-w-7xl mx-auto ">
        {/* Left Side - Single Div */}
        <div className="w-full h-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8] overflow-hidden">
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
          <img src={s1} />
        </div>

        {/* Right Side - Column with Two Divs */}
        <div className="flex flex-col gap-6 ">
          <div className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
            <div className="p-0 flex overflow-hidden">
              <div className=" p-6">
                <div className="p-0">
                  <div className="text-2xl font-bold mb-4">Configurable</div>
                </div>
                <p className="text-gray-700">
                  Change language, turn on dark mode, save custom views, and
                  more.
                </p>
              </div>
              <img src={s2} />
            </div>
          </div>

          <div className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
            <div className=" relative p-0 flex  overflow-hidden">
              <div className="p-6">
                <div className="p-0">
                  <div className="text-2xl font-bold mb-4">Omnichannel</div>
                </div>
                <p className="text-gray-700">
                  See all your support conversations in one place.
                </p>
              </div>
              <img src={s3} className="pl-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Three Equal Divs */}
      <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
        <div className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
          <div className="p-0">
            <div className=" p-6">
              <div className="p-0">
                <div className="text-2xl font-bold mb-4">Multiplayer</div>
              </div>
              <p className="text-gray-700">
                Collaborate efficiently with teammates in real time thanks to
                co-presence indicators, notes, and @mentions.
              </p>
            </div>
            <img src={s4} />
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
          <divt className="p-0">
            <div className=" p-6">
              <div className="p-0">
                <div className="text-2xl font-bold mb-4">Lightning fast</div>
              </div>
              <p className="text-gray-700">
                Win time back with powerful macros, nonexistent load times, and
                simple shortcuts that put your entire Inbox a Cmd+K away.
              </p>
            </div>
            <div className="flex justify-end">
              <img src={s5} />
            </div>
          </divt>
        </div>

        <div className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
          <div className="p-0">
            <div className=" p-6">
              <div className="p-0">
                <div className="text-2xl font-bold mb-4">Team management</div>
              </div>
              <p className="text-gray-700">
                Get more done by optimizing operations with live dashboards,
                reporting, work management tools, and more.
              </p>
            </div>
            <div className="flex justify-end">
              <img src={s6} />
            </div>
          </div>
        </div>
      </div>
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
