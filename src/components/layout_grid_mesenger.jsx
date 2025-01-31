import m2 from "../assets/m2.svg";
import m3 from "../assets/m3.svg";

import Z from "../assets/Z.png";
import avater from "../assets/avater.png";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon14.png";

const Layoutgridmesenger = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Customizable Messenger
            </h2>
            <p className="text-sm max-w-[25rem] font-normal text-gray-600 mt-2">
              It s <span className="italic">your</span> Messenger—so have it
              match your brand with infinite design options.
            </p>
          </div>
          <div className="px-5 w-full relative">
            <img
              src={m2}
              alt="Three different messenger interfaces showing customization options"
              width={400}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="p-5">
            <div className="text-xl font-bold">Configurable experiences</div>
            <div className="text-sm max-w-[25rem] font-normal mt-2">
              Show and hide different content, features—even entire Spaces—to
              create bespoke Messenger experiences.
            </div>
          </div>
          <div className="p-0">
            <img
              src={m3}
              alt="Configurable experiences illustration"
              width={400}
              height={200}
              className="w-full h-[20rem] object-fill"
            />
          </div>
        </div>
      </div>
      {/* First row - 2 columns */}
      {/* <div className=" relative overflow-hidden  border border-[#D3D5D8] rounded-2xl bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="p-7">
            <div className="text-2xl font-bold ">Customizable Messenger</div>
            <div className="text-sm max-w-[25rem] font-normal">
              It's your Messenger—so have it match your brand with infinite
              design options.
            </div>
          </div>
          <div className="px-7 w-full  h-[30rem] absolute bottom-0 ">
            <img src={m2} width={527} height={301} />
          </div>
        </div> */}
      {/* <div className="grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="p-7">
            <h2 className="text-2xl font-bold text-gray-900">
              Customizable Messenger
            </h2>
            <p className="text-sm max-w-[25rem] font-normal text-gray-600">
              It's <span className="italic">your</span> Messenger—so have it
              match your brand with infinite design options.
            </p>
          </div>
          <div className="px-7 w-full h-[22rem] bg-red-500 relative">
            <img
              src={m2}
              alt="Three different messenger interfaces showing customization options"
              className="absolute bottom-0 left-0 w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="overflow-hidden border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="p-7">
            <div className="text-2xl font-bold ">Configurable experiences</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Show and hide different content, features—even entire Spaces—to
              create bespoke Messenger experiences.
            </div>
          </div>
          <div className="p-0">
            <img src={m3} className="bg-muted  w-full" />
          </div>
        </div>
      </div> */}

      {/* Second row - 3 columns */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 space-y-4 border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center">
            <img src={icon1} className="bg-muted  w-6 h-6 " />
          </div>
          <div className="pt-[2rem] pb-[2rem]">
            <div className="text-2xl pb-[1rem] leading-tight">Mobile</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Bring the Messenger to your mobile app with powerful iOS and
              Android SDKs.
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4 border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center">
            <img src={icon2} className="bg-muted  w-6 h-6 " />
          </div>
          <div className="pt-[2rem] pb-[2rem]">
            <div className="text-2xl pb-[1rem] leading-tight ">
              Omnichannel messaging
            </div>
            <div className="text-sm max-w-[25rem] font-normal">
              Support customers using their preferred channel— whether that’s
              email, SMS, social, or more.
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4 border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center">
            <img src={icon3} className="bg-muted  w-6 h-6 " />
          </div>
          <div className="pt-[2rem] pb-[2rem]">
            <div className="text-2xl pb-[1rem] leading-tight">Phone</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Centralize your phone support using our integrations (with more
              coming soon).
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4 border  border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
          <div className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center">
            <img src={icon4} className="bg-muted  w-6 h-6 " />
          </div>
          <div className="pt-[2rem] pb-[2rem]">
            <div className="text-2xl pb-[1rem] leading-tight">Switch</div>
            <div className="text-sm max-w-[12rem] font-normal ">
              Reduce phone wait times by letting customers switch to messaging
              mid-call.
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
          "Our bot deflection rate with our previous customer service solution
          was 5–10%. With Intercom, we achieved
          <span className="font-bold">
            {" "}
            65% bot deflection within just one week{" "}
          </span>
          of going live."
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
};

export default Layoutgridmesenger;
