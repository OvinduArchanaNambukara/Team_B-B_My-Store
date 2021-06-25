import React from "react";
import {Container} from "react-bootstrap";
import Welcome from "./components/Welcome";
import CategoryArea from "./componets/CategoryArea";

const Client: React.FC = () => {
    return (
        <Container fluid={true}>
            <Welcome/>
            <CategoryArea/>
        </Container>
    );
}

export default Client;
