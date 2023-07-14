import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="flex items-center flex-col text-dark bg-light w-full min-h-screen">
      <NavBar />
      {/* <Layout className="pt-0 mb-8"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/personal-Portfolio" element={<Home />} />
          <Route path="/personal-Portfolio/about" element={<About />} />
          <Route
            path="/personal-Portfolio/experience"
            element={<Experience />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* </Layout> */}
      <Footer />
    </div>
  );
}
export default App;
