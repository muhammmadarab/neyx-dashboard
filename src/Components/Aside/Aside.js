import React from "react";
import "./Aside.css";
import image from "../../logo.svg";
import AsideLink from "./AsideLink";

const Aside = () => {
  return (
    <aside>
      <div className="logo">
        <img className="logo__img" src={image} alt="NeyX" />
      </div>
      <div className="aside__links">
        <AsideLink to="/" icon="fa fa-home" label="Home" />
        <AsideLink to="/analytics" icon="fas fa-chart-line" label="Analytics" />
        <AsideLink to="/" icon="fas fa-tags" label="Orders" />
        <AsideLink to="/" icon="far fa-user-circle" label="Profile" />
        <AsideLink to="/" icon="fas fa-dollar-sign" label="Pricing/plans" />
        <AsideLink to="/inventory" icon="fas fa-warehouse" label="Inventory" />
        <AsideLink to="/" icon="fa fa-wrench" label="Service Request" />
        <AsideLink to="/" icon="fas fa-phone" label="Contact" />
        <AsideLink to="/" icon="fas fa-bullhorn" label="Anouncements" />
        <AsideLink to="/" icon="fas fa-cog" label="Settings" />
      </div>
      <div className="aside__footer">
        <AsideLink to="/" icon="fas fa-power-off" label="Logout" />
        <AsideLink to="/" icon="fas fa-comment-alt" label="Feedback" />
      </div>
    </aside>
  );
};

export default Aside;
