import Skillset from "./Components/Skillset/Skillset";
import About from "./Screens/About/About";
import Home from "./Screens/Home/Home";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skillset Name='Angular JS' />
    </div>
  );
}

export default App;
