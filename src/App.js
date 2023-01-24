import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
import Jumbotron from "./components/Jumbotron";
import About from "./components/about";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
