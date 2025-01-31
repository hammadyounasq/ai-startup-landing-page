import { NavBar } from "./components/nav-bar";
import { HeroSection } from "./components/hero-section";
import AutomationLanding from "./components/automation-landing";
import FeaturesGrid from "./components/features-grid";
import LayoutGrid from "./components/layout-grid";
import ProactiveSupport from "./components/proactive-support";
import ProactiveLayoutGrid from "./components/proactiveLayoutGrid";
import Messenger from "./components/messenger";
import Layoutgridmesenger from "./components/layout_grid_mesenger";
import Platform from "./components/Platform";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AutomationLanding />
      <FeaturesGrid />
      <LayoutGrid />
      <ProactiveSupport />
      <ProactiveLayoutGrid />
      <Messenger />
      <Layoutgridmesenger />
      <Platform />
    </>
  );
}

export default App;
