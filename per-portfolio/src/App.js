import NavBar from "./components/NavBar";
import { Routes, Route, HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="flex items-center flex-col text-dark bg-light w-full min-h-screen">
      <NavBar />
      {/* <Layout className="pt-0 mb-8"> */}
      <HashRouter>
        <Routes>
          <Route index path="/personal-Portfolio" element={<Home />} />
          <Route path="/personal-Portfolio/about" element={<About />} />
          <Route
            path="/personal-Portfolio/experience"
            element={<Experience />}
          />
          <Route path="/personal-Portfolio/education" element={<Education />} />
        </Routes>
      </HashRouter>
      {/* <Home /> */}
      {/* </Layout> */}
      <Footer />
    </div>
  );
}
export default App;
