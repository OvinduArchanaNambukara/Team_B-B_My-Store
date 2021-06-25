import React from "react";
import {Container} from "react-bootstrap";
import CategoryArea from "./components/CategoryArea";
import Welcome from "./components/Welcome";

const Client: React.FC = () => {
    return (
        <Container fluid={true}>
            <Welcome/>
            <CategoryArea/>
        </Container>
    );
}

export default Client;
