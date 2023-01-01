import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/home";
import About from "../pages/about";
import Skills from "../pages/skills";
import Contact from "../pages/contact";
import Loading from "../pages/loading";
import Project from "../pages/projects";

export default function Nav() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        <Route path="*" component={Home} />
      </Routes>
    </Router>
  );
}
