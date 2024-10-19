import GameAssets from "./Components/GameAssets";
import Header from "./Components/Header";
import GameSystem from "./Components/GameSystem";
import Hero from "./Components/Hero";
import TravelFrogFeatures from "./Components/TravelFrogFeatures";
import Flag from "./Components/Flag";
import Roadmap from "./Components/Roadmap";
import TravelToEarn from "./Components/Travel";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Flag/>
      <TravelToEarn/>
      <TravelFrogFeatures/>
      <GameAssets/>
      <GameSystem/>
      <Roadmap/>
      <Footer/>
    </div>
  );
}

export default App;
