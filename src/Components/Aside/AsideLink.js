import React from "react";

const AsideLink = (props) => {
  return (
    <a className="aside__link" href={props.to}>
      <i className={`aside__link__icon ${props.icon}`}></i>
      {props.label}
    </a>
  );
};

export default AsideLink;
