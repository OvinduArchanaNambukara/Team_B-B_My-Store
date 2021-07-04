import React from "react";
import BannerImage from "../../assets/images/welcomeImage/welcome_banner.webp";
import {Col, Image, Row} from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Welcome: React.FC = () => {
    return (
        <Row className="welcome">
            <Col className="p-0">
                <Image src={BannerImage} fluid={true} className="image"/>
            </Col>
            <Col xs={{span: 7, offset: 5}} md={{span: 6, offset: 6}} className="banner-text">
                <span className="regular">100% Healthy & Affordable</span><br/>
                <span className="organic">Organic Vegetables</span><br/>
                <span className="regular">Small Changes Big Difference</span><br/>
                <AnchorLink href="#shop" className="shop-now mt-2">Shop Now</AnchorLink>
            </Col>
        </Row>
    );
}

export default Welcome;
