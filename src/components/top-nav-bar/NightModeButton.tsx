import React from "react";
import Toggle from "react-toggle";
import {CgSun, IoMoonOutline} from "react-icons/all"
import {iconColors} from "../../custom-styles/custom-nightmode-icons";

type NightModeButton = {
  customClassName: string
}

const NightModeButton: React.FC<NightModeButton> = (prop) => {
  return (
      <div className={prop.customClassName}>
        <Toggle
            defaultChecked={false}
            icons={{
              checked: <IoMoonOutline style={iconColors} className='mr-0'/>,
              unchecked: <CgSun style={iconColors} className='mr-0'/>
            }}
        />
      </div>

  );
}

export default NightModeButton;
