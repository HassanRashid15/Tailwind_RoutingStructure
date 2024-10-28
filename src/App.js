import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes for routing
import Preloader from "./component/Preloader"; // Ensure this path is correct
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SideOption from "./component/SideOption";
import FloatingButton from "./component/FloatingButton";
import Home from "./pages/Home.js"; 
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 9000)); // Simulate a delay
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <Content />
      )}
    </div>
  );
};

// Content component that includes routing and other components
const Content = () => {
  return (
    <div>
      <Navbar />
      <div className="content-adjustment">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* You can add more routes here as needed */}
        </Routes>
      </div>
      <Footer />
      <SideOption />
      <FloatingButton />
    </div>
  );
};

export default App;
