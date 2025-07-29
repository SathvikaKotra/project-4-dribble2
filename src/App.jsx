import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <main className="bg-gray-900 text-white min-h-screen antialiased overflow-x-hidden">
      <Navbar />
      <Pricing />
    </main>
  );
}

export default App;
