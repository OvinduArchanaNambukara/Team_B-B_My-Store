import React from "react";
import {Container} from "react-bootstrap";
import CategoryArea from "./components/category-area/CategoryArea";
import Welcome from "./components/welcome/Welcome";
import SearchBar from "./components/search-bar/SearchBar";
import Footer from "./components/footer/Footer";

const Client: React.FC = () => {
    return (
        <Container fluid={true}>
            <Welcome/>
            <SearchBar/>
            <CategoryArea/>
            <Footer/>
        </Container>
    );
}

export default Client;
