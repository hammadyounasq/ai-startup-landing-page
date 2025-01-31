import { Button } from "../components/ui/button";
import Platform1 from "../assets/Platform.svg";
import browncheck from "../assets/check1.svg";

const Platform = () => {
  return (
    <div className="bg-[#041527] relative overflow-hidden min-h-screen  ">
      {/* <div className="absolute z-[0] w-full h-[20rem]  top-[10%] left-[0%]  bottom-20 blur-[3rem]  bg-[#FCEEE8] bg-opacity-80  " /> */}

      <div className="relative max-w-6xl mx-auto px-4  pt-20 pb-32 flex flex-col justify-center items-center">
        {/* Header section */}

        <div className="text-center space-y-6 mb-16 bg-gradient-to-tr">
          <span className="bg-[#EC926C] text-[#423200] px-4 py-1.5 rounded-full text-sm font-medium">
            Messenger and Omnichannel
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto">
            Deliver conversational support where it works best for your
            customers
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

        <div className="relative    w-full max-w-7xl mb-[10rem]">
          <img
            src={Platform1}
            alt="Intercom Dashboard"
            width={1200}
            height={800}
            className="rounded-lg object-fill  "
          />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-1 max-w-6xl ">
          <div className=" flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-12 h-12  mr-4 ">
              <img src={browncheck} />
            </div>
            <h3 className="font-normal text-white ">
              Unlock the best AI-powered customer service tools in minutes
            </h3>
          </div>
          <div className="flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-10 h-10  mr-4 ">
              <img src={browncheck} />
            </div>
            <h3 className="font-normal text-white  ">
              Lower your costs with more efficient support teams
            </h3>
          </div>
          <div className="flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-10 h-10  mr-4 ">
              <img src={browncheck} />
            </div>
            <h3 className="font-normal text-white ">
              Scale support without sacrificing customer experience
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
