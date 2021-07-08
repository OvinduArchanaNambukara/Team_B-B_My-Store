import React, {useEffect, useState} from "react";
import Toggle from "react-toggle";
import {CgSun, IoMoonOutline} from "react-icons/all"
import {iconColors} from "../../custom-styles/custom-nightmode-icons";

type NightModeButton = {
  customClassName: string
  onClicked: () => void
  isClicked: boolean
}

const NightModeButton: React.FC<NightModeButton> = (props) => {
  const {isClicked, customClassName, onClicked} = props

  return (
      <div className={customClassName}>
        <Toggle
            id='123'
            checked={isClicked}
            defaultChecked={false}
            icons={{
              checked: <IoMoonOutline style={iconColors} className='mr-0'/>,
              unchecked: <CgSun style={iconColors} className='mr-0'/>
            }}
            onClick={onClicked}
        />
      </div>

  );
}

export default NightModeButton;
