import React from "react";
import "./Aside.css";
import image from "../../logo.svg";

const Aside = () => {
  return (
    <aside>
      <div className="logo">
        <img src={image} alt="NeyX"/>
      </div>
      <div className="links">
        <a href="/">
          <i className="fa fa-home" aria-hidden="true"></i>
          Home
        </a>
        <a href="/">
          <i className="fa fa-book-reader" aria-hidden="true"></i>
          Analytics
        </a>
        <a href="/">
          <i className="fa fa-award" aria-hidden="true"></i>
          Orders
        </a>
        <a href="/">
          <i className="fa fa-calendar-alt" aria-hidden="true"></i>
          Profile
        </a>
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Pricing/plans
        </a>
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Inventory
        </a>
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Service request
        </a>
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Contact
        </a>
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Anouncements
        </a>
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Settings
        </a>
      </div>
      <div className="AsideFooter">
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Logout
        </a>
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Feedback
        </a>
      </div>
    </aside>
  );
};

export default Aside;
