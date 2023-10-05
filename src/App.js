import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import WorkManagement from "./Components/WorkManagement";
import Customize from "./Components/Customize";
import Pricing from "./Components/Pricing";
import YourWork from "./Components/YourWork";
import YourData from "./Components/YourData";
import Sponsors from "./Components/Sponsors";
import Apps from "./Components/Apps";
import Clients from "./Components/Clients";
import FreeTrial from "./Components/FreeTrial";
import Footer from "./Components/Footer";
import ToggleState from "./context/TogglerState";

function App() {
  return (
    <ToggleState>
      <Navbar />
      <Header />
      <WorkManagement />
      <Customize />
      <Pricing />
      <YourWork />
      <YourData />
      <Sponsors />
      <Apps />
      <Clients />
      <FreeTrial />
      <Footer />
    </ToggleState>
  );
}

export default App;
