import botchat from "../assets/botchat.png";
import snoozo from "../assets/snoozo.png";
import AI from "../assets/AI.png";
import search from "../assets/search.png";
import topice from "../assets/topice.png";
import Z from "../assets/Z.png";
import avater from "../assets/avater.png";
export default function FeaturesGrid() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* First row - 2 columns */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="overflow-hidden  border border-[#D3D5D8] rounded-2xl bg-gradient-to-b  from-blue-50 to-blue-100">
          <div className="p-7">
            <div className="text-2xl font-bold ">Fin</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Our AI-powered bot automatically and accurately answers support
              questions with zero training required.
            </div>
          </div>
          <div className="p-0">
            <img src={botchat} className="bg-muted w-full" />
          </div>
        </div>

        <div className="overflow-hidden border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#F3F9FF] to-[#C4E0FD]">
          <div className="p-7">
            <div className="text-2xl font-bold ">Workflows</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Easily build powerful no-code automations with bots, triggers,
              conditions, and rules—all in one place.
            </div>
          </div>
          <div className="p-0">
            <img src={snoozo} className="bg-muted  w-full" />
          </div>
        </div>
      </div>

      {/* Second row - 3 columns */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="overflow-hidden border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#F3F9FF] to-[#C4E0FD]">
          <div className="p-7">
            <div className="text-2xl">AI-powered Inbox</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Instantly generate replies, recap conversations for other agents,
              and create new help articles.
            </div>
          </div>
          <div className="p-0">
            <img src={AI} className="bg-muted w-full" />
          </div>
        </div>

        <div className="overflow-hidden  border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#F3F9FF] to-[#C4E0FD]">
          <div className="p-7">
            <div className="text-2xl font-bold ">Article suggestions</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Immediately recommend helpful content with machine
              learning—directly in your product.
            </div>
          </div>
          <div className="p-0">
            <img src={search} className="bg-muted  w-full" />
          </div>
        </div>

        <div className="overflow-hidde  border border-[#D3D5D8] rounded-2xl bg-gradient-to-b  from-[#F3F9FF] to-[#C4E0FD]">
          <div className="p-7 ">
            <div className="text-2xl font-bold ">Conversation topics</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Better understand your customers with AI-powered analysis of
              support conversations.
            </div>
          </div>
          <div className="pt-10">
            <img src={topice} className="bg-muted aspect-video w-full" />
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
}
// export default function InboxLanding() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       {/* Hero Section */}
//       <div className="text-center mb-16">
//         <div className="text-blue-600 font-medium mb-4">INBOX</div>
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
//           Maximize team productivity with the world's fastest shared Inbox
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-4">
//           Our AI-enhanced Inbox is lightning fast, easy-to-use, and optimized for efficiency—with everything a modern
//           support team needs.
//         </p>
//         <a href="#" className="text-blue-600 hover:underline">
//           Learn more about the inbox →
//         </a>
//       </div>

//       {/* Main Image Placeholder */}
//       <div className="w-full aspect-video bg-gray-200 rounded-lg mb-16"></div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//         {/* Ticketing */}
//         <div className="p-6 bg-white rounded-lg border">
//           <h3 className="font-semibold text-lg mb-2">Ticketing</h3>
//           <p className="text-gray-600">
//             Every email and chat message is automatically ticketed, giving your team complete visibility in one
//             organized view.
//           </p>
//         </div>

//         {/* Configurable */}
//         <div className="p-6 bg-white rounded-lg border">
//           <h3 className="font-semibold text-lg mb-2">Configurable</h3>
//           <p className="text-gray-600">
//             Choose features that fit your needs, take control with custom views, and more.
//           </p>
//         </div>

//         {/* Omnichannel */}
//         <div className="p-6 bg-white rounded-lg border">
//           <h3 className="font-semibold text-lg mb-2">Omnichannel</h3>
//           <p className="text-gray-600">See all your support conversations in one place.</p>
//           <div className="flex gap-2 mt-4">
//             <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
//             <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
//             <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
//           </div>
//         </div>

//         {/* Multiplayer */}
//         <div className="p-6 bg-white rounded-lg border">
//           <h3 className="font-semibold text-lg mb-2">Multiplayer</h3>
//           <p className="text-gray-600">
//             Work together in real-time with teammates to handle complex requests and avoid duplicate responses.
//           </p>
//         </div>

//         {/* Lightning fast */}
//         <div className="p-6 bg-white rounded-lg border">
//           <h3 className="font-semibold text-lg mb-2">Lightning fast</h3>
//           <p className="text-gray-600">Our AI-powered Inbox responds instantly, and helps you work faster than ever.</p>
//         </div>

//         {/* Team management */}
//         <div className="p-6 bg-white rounded-lg border">
//           <h3 className="font-semibold text-lg mb-2">Team management</h3>
//           <p className="text-gray-600">
//             Add your team members, assign roles, and manage permissions to keep everything running smoothly.
//           </p>
//         </div>
//       </div>

//       {/* Testimonial */}
//       <div className="max-w-2xl mx-auto text-center">
//         <p className="text-xl font-medium mb-6">
//           "The thing I noticed most about Inbox is the speed. In a test, we saw a 15% increase in the number of
//           conversations handled."
//         </p>
//         <div className="flex items-center justify-center gap-4">
//           <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
//           <div className="text-left">
//             <div className="font-semibold">Pete Brown</div>
//             <div className="text-gray-600 text-sm">Director of Strategy and Operations</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
