import React from "react";
import "../../styles/button.scss";
import "../../styles/_variables.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Button = ({ isDisabled, clickHandler, text, type, icon }) => {
  let btnClasses = classNames({
    btn: true,
    "btn-primary": type === "primary" ? true : false,
    "btn-primary-enabled": !isDisabled,
    "btn-variant": type === "variant" ? true : false,
    "btn-variant-enabled": !isDisabled,
    "btn-secondary": type === "secondary" ? true : false,
    "btn-secondary-enabled": !isDisabled,
    "btn-bordered": type === "bordered" ? true : false,
    "btn-bordered-enabled": !isDisabled,
    "width-icon": icon && text ? true : false,
    "width-just-icon": icon && !text ? true : false,
    "btn-disabled": isDisabled,
  });

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
