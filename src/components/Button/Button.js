import React from "react";
import "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Button = ({ isDisabled, clickHandler, text, type, icon }) => {
  let btnEnabled = !isDisabled ? `btn-${type}-enabled` : null;

  let btnClasses = classNames([
    "btn",
    `btn-${type}`,
    btnEnabled,
    {
      "width-icon": icon && text ? true : false,
      "width-just-icon": icon && !text ? true : false,
      "btn-disabled": isDisabled,
    },
  ]);

  return (
    <div>
      <button title={type} className={btnClasses} onClick={clickHandler} disabled={isDisabled}>
        {text && <span className="btnText">{text}</span>}
        {icon && <FontAwesomeIcon className="btnIcon fa fa-gear" icon={icon} />}
      </button>
    </div>
  );
};

export default Button;
