import React from "react";
import {Row} from "react-bootstrap";
import FooterIcon from "./FooterIcon";
import {faFacebookF, faLinkedinIn, faPinterestP, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faRss} from "@fortawesome/free-solid-svg-icons";
import {ISocialLink} from "../../types/Types";

const icons: ISocialLink[] = [
  {icon: faFacebookF, path: "#facebook"},
  {icon: faTwitter, path: "#twitter"},
  {icon: faLinkedinIn, path: "#linkedin"},
  {icon: faPinterestP, path: "#pinterest"},
  {icon: faRss, path: "#rss"},
  {icon: faYoutube, path: "#youtube"}
];

const FooterIcons: React.FC = () => {
  return (
    <Row className="justify-content-center icons my-3 px-1">
      {icons.map((icon: ISocialLink, index: number) => {
          return (
            <FooterIcon icon={icon.icon} path={icon.path} key={index}/>
          );
        }
      )}
    </Row>
  );
}

export default FooterIcons;