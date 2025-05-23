import Navbar from "./components/nav-bar";
import { HeroSection } from "./components/hero-section";
import AutomationLanding from "./components/automation-landing";
import FeaturesGrid from "./components/features-grid";
import LayoutGrid from "./components/layout-grid";
import ProactiveSupport from "./components/proactive-support";
import ProactiveLayoutGrid from "./components/proactiveLayoutGrid";
import Messenger from "./components/messenger";
import Layoutgridmesenger from "./components/layout_grid_mesenger";
import Platform from "./components/Platform";
import LayoutgridPlatform from "./components/LayoutgridPlatform";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AutomationLanding />
      <FeaturesGrid />
      <LayoutGrid />
      <ProactiveSupport />
      <ProactiveLayoutGrid />
      <Messenger />
      <Layoutgridmesenger />
      <Platform />
      <LayoutgridPlatform />
      <Footer />
    </>
  );
}

export default App;
