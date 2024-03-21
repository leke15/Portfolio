import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/services/Service";
import DownloadApp from "./components/downloadApp/DownloadApp";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <>
      <Home />
      <About />
      <Service />
      <DownloadApp />
      <Contact />
    </>
  );
};

export default App;
