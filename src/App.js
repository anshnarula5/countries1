import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Main from "../src/components/Main/Main";
import Footer from "./components/Layout/Footer";
import globe from "./globe.jpg"

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="main">
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
