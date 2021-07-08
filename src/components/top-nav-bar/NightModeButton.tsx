import React from "react";
import Toggle from "react-toggle";
import {CgSun, IoMoonOutline} from "react-icons/all"
import {iconColors} from "../../custom-styles/custom-nightmode-icons";

const NightModeButton: React.FC = () => {
  return (
      <div className='align-items-center d-flex pr-md-3 pl-4 pl-md-0'>
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
