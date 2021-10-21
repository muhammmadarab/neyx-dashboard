import React from "react";
import Card from "./Card";
import "./Content.css";

const Content = () => {
  return (
    <div class="content">
      <div class="cards">
        <Card title="Total Orders" desc="Something" figure="3,456" />
        <Card
          title="Bot Orders"
          desc="Something"
          figure="2,345"
          change="+34%"
          modifier="inc"
        />
        <Card title="Ongoing Conversation" desc="Something" figure="2,341" />
        <Card title="Orders Completed" desc="Something" figure="1,598" />
      </div>
    </div>
  );
};

export default Content;
