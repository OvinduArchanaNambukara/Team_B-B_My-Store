import React from "react";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
        
const Client: React.FC = () => {
    return (
        <React.Fragment>
            <Welcome/>
            <Footer />
        </React.Fragment>
    );
}

export default Client;
