import React from "react";
import {Container} from "react-bootstrap";
import BottomNav from "./components/bottom-nav/BottomNav";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import Checkout from "./components/cart-table/Checkout";

const Client: React.FC = () => {
    return (
        <React.Fragment>
            <Container fluid={true}>
                <TopNavBar/>
                <BottomNav/>
                {/*<Welcome/>*/}
                {/*<SearchBar/>*/}
            </Container>
            {/*<Container>*/}
            {/*    <CategoryArea/>*/}
            {/*    <Products/>*/}
            {/*</Container>*/}
            <Checkout/>
            {/*<Container fluid={true}>*/}
            {/*    <Footer/>*/}
            {/*</Container>*/}


        </React.Fragment>

    );
}

export default Client;
