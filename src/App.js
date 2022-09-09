import React from "react";
import About from "./components/about";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";



function App(){

  return (
    <div className="font-superleague box-border grid gap-0 h-screen">
      <Navbar />
      <Hero />
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
