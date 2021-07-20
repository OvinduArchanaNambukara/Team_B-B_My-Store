import React from "react";
import Footer from "./components/footer/Footer";
import BottomNav from "./components/bottom-nav/BottomNav";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./components/Routes/Routes";

const Client: React.FC = () => {
  return (
      <Router>
        <TopNavBar/>
        <BottomNav/>
        <Routes/>
        <Footer/>
      </Router>
  );
}

export default Client;
