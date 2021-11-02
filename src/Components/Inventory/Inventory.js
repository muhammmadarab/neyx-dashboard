import React from "react";
import "./Inventory.css";
import BlankSpace from "./BlankSpace";
import InventorySummary from "./InventorySummary";
import ProductCategory from "./ProductCategory";
import Adjust from "./Adjust";
import Table from "./Table";

const Inventory = () => {
  return (
    <div className="inventory">
      <ProductCategory />
      <div className="inventory__holder">
        <InventorySummary />
        <BlankSpace />
      </div>
      <Adjust title="For all Products" />
      <Adjust title="For every Category" dropdown={true} />
      <Table />
    </div>
  );
};

export default Inventory;
