import React from "react";
import {Container} from "react-bootstrap";
import CategoryArea from "./componets/CategoryArea";

const Client: React.FC = () => {
    return (
        <Container fluid={true}>
            <CategoryArea/>
        </Container>
    );
}

export default Client;
