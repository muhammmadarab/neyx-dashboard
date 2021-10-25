import React from "react";
import Line from "./Line";
import Pie from "./Pie";
import "./Content.css";
import Area from "./Area";
import Category from "./Category";
import Profit from "./Profit";
import Table from "./Table";
import Cards from "./Cards";

const Content = () => {
  return (
    <div class="content">
      <Cards />
      <div class="content__mid">
        <Line />
        <Pie />
      </div>
      <div class="content__low">
        <Area />
        <Category />
        <Profit />
      </div>
      <Table />
    </div>
  );
};

export default Content;
