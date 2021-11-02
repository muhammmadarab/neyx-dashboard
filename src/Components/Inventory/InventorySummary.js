import React from "react";
import Product from "./Product";

const InventorySummary = () => {
  return (
    <div className="inventory__summary">
      <h3>Inventory Summary</h3>
      <div className="products">
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
      </div>
    </div>
  );
};

export default InventorySummary;
