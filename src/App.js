import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import "./styles/main.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
