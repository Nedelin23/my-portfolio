import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <Navbar />
          <HomePage />
        </div>
      </main>
    </>
  );
}

export default App;
