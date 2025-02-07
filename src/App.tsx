import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

export default function App() {
  return (
    <div className="flex-auto min-h-screen w-full bg-slate-200">
      {/* navigation */}
      <div id="navigation" className="text-center py-2 space-y-2">
        <Nav />
      </div>
      {/* hero */}
      <div id="hero" className="">
        <Hero />
      </div>
      {/* //what we do */}
      <div id="what-we-do" className="">
        <WhatWeDo />
      </div>
      {/* //our work */}
      <div id="our-work" className=""></div>
      {/* //customers */}
      <div id="customers" className=""></div>
      {/* //contact us */}
      <div id="contact-us" className=""></div>
    </div>
  );
}
