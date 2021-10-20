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
        <i class="fas fa-chart-line"></i>
          Analytics
        </a>
        <a href="/">
          <i className="fas fa-tags" aria-hidden="true"></i>
          Orders
        </a>
        <a href="/">
        <i class="far fa-user-circle"></i>
          Profile
        </a>
        <a href="/">
        <i class="fas fa-dollar-sign"></i>
          Pricing/plans
        </a>
        <a href="/">
        <i class="fas fa-warehouse"></i>
          Inventory
        </a>
        <a href="/">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          Service Request
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
