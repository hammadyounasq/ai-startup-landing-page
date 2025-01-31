import { Button } from "../components/ui/button";
import chat2 from "../assets/chat2.png";
import check from "../assets/chectblue.svg";
// import { ArrowRight, MessageCircle, TrendingDown, Shield } from "lucide-react";

export default function AutomationLanding() {
  return (
    <div className="relative overflow-hidden min-h-screen ">
      <div className="absolute z-[0] w-full h-[10rem]  top-[10%] left-[0%]  bottom-20 blur-[3rem]  bg-blue-300 bg-opacity-50  " />

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
            with Intercom s AI-powered chatbots and automation tools.
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
        <div className="relative min-h-[25rem]  rounded-b-3xl overflow-hidden flex justify-center  bg-gradient-to-r  from-blue-50 via-[#D1E8FE] to-[#C6E1FD] backdrop-blur-[10rem] mb-[10rem]">
          <div className=" absolute min-h-[20rem] rounded-[0.9rem] overflow-hidden top-[3.10rem]  w-[20rem]  mb-24 shadow-xl">
            <img
              src={chat2}
              width={630}
              height={750}
              className="h-full w-full object-cover"
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
    </div>
  );
}
