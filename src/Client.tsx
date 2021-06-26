import React from "react";
import {Container} from "react-bootstrap";
import CategoryArea from "./components/CategoryArea";
import Welcome from "./components/Welcome";
import SearchBar from "./components/SearchBar";

import Footer from "./components/Footer";

const Client: React.FC = () => {
    return (
        <Container fluid={true}>
            <Welcome/>
            <CategoryArea/>
            <SearchBar/>
            <Footer />
        </Container>
    );
}

export default Client;
