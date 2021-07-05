import React from "react";
import {Container} from "react-bootstrap";
import Footer from "./components/footer/Footer";
import BottomNav from "./components/bottom-nav/BottomNav";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";

const Client: React.FC = () => {
  return (
      <Router>
        <Container fluid={true}>
          <TopNavBar/>
          <BottomNav/>
        </Container>
        <Routes/>
        <Container fluid={true}>
          <Footer/>
        </Container>
      </Router>
  );
}

export default Client;
