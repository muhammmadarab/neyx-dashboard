import React from "react";
import { Link } from "react-router-dom";

const AsideLink = (props) => {
  return (
    <Link className="aside__link" to={props.to}>
      <i className={`aside__link__icon ${props.icon}`}></i>
      {props.label}
    </Link>
  );
};

export default AsideLink;
