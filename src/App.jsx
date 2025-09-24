import React, { useState } from "react";
import { miembros } from "./data/miembros.js";
import Cards from "./components/Cards";
import ToggleDark from "./ToggleDark.jsx";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <main
      className={`
        min-h-screen p-8 flex flex-col items-center justify-center
        ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}
        `}
    >
      <header className="w-80 sm:w-110 sm:p-6 sm:px-0 sm:pb-0 gap-5 flex flex-col sm:flex-row items-center justify-center md:justify-between place-self-center">
        <h1 className="w-65 text-2xl sm:text-xl font-bold font-serif flex items-center sm:self-start justify-start sm:pl-0">
          The creative crew
        </h1>
        <div className="w-60 sm:w-50 flex flex-col items-center justify-center">
          <p className="w-[92%] font-bold sm:text-[11px]">Who we are</p>
          <p className="w-[92%] text-xs sm:text-[10px]">
            We are team of cratively diverse, driven, innovative individuals
            working in various locations from the world.
          </p>
        </div>
        <ToggleDark isDark={isDark} setIsDark={setIsDark}/>
      </header>
      <div className="flex items-center justify-center">
        <Cards miembros={miembros} />
      </div>
    </main>
  );
}
