import React from "react";
import Product from "./Product";

const ProductCategory = () => {
  return (
    <div className="product__category">
      <h3>Product Category</h3>
      <div className="products">
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
        <Product icon="fa fa-cog" name="Electronic Gadgets" number="289" />
      </div>
    </div>
  );
};

export default ProductCategory;
