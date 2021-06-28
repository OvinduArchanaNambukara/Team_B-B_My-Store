import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type FooterIconProps = {
  icon: IconProp
  path: string
}

const FooterIcon: React.FC<FooterIconProps> = (props) => {
  const {icon, path} = props;

  return (
    <a href={path} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={icon} className="icon mx-1"/></a>
  );
}

export default FooterIcon;