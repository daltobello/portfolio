import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SelectedWork from "../SelectedWork/SelectedWork";
import About from "../About/About";
import projectData from "../../ProjectData/ProjectData";

function App() {

  const [works, setWorks] = useState(projectData)

  return (
      <main className="layout-wrapper">
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header className="header-wrapper"/>
              <SelectedWork works={works} className="works-wrapper" />
              {/* <Nav className="nav-wrapper"/> */}
              <Footer className="footer" />
            </>
          }
        />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
      </main>
  );
}

export default App;
