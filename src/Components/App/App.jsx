import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import SelectedWork from "../SelectedWork/SelectedWork";
import About from "../About/About";
import projectData from "../../ProjectData/ProjectData";

function App() {

  const [works, setWorks] = useState(projectData)

  return (
    <main className='main'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <SelectedWork works={works}/>
              <Nav />
            </>
          }
        />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
