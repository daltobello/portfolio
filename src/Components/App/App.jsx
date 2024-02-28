import { useState } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import SelectedWork from "../SelectedWork/SelectedWork";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
        <Header />
        <SelectedWork />
        <Nav />
    </main>
  );
}

export default App;
