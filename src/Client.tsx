import React from "react";
import {Container} from "react-bootstrap";
import CategoryArea from "./components/category-area/CategoryArea";
import Welcome from "./components/welcome/Welcome";
import SearchBar from "./components/search-bar/SearchBar";
import Footer from "./components/footer/Footer";
import Products from "./components/productUX/Products";
import BottomNav from "./components/bottom-nav/BottomNav";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import Checkout from "./components/cart-table/Checkout";

const Client: React.FC = () => {
    return (
        <React.Fragment>
            <Container fluid={true}>
                <TopNavBar/>
                <BottomNav/>
                <Welcome/>
                <SearchBar/>
            </Container>
            <Container>
                <CategoryArea/>
                <Products/>
            </Container>
            <Checkout/>
            <Container fluid={true}>
                <Footer/>
            </Container>
        </React.Fragment>
    );
}

export default Client;
