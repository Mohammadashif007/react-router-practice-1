import { useState } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            {/* <DaisyNav></DaisyNav> */}
            <Navbar></Navbar>
        </div>
    );
}

export default App;
