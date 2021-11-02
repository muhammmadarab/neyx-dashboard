import React from "react";

const Adjust = (props) => {
  return (
    <div className="adjust">
      <h3>{props.title}</h3>
      <p>Subheading</p>

      {props.dropdown && (
        <select name="category" id="category">
          <option value="none">Select</option>
          <option value="Dress">Dress</option>
          <option value="electronics">Electronics</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
        </select>
      )}

      <div className="bottom">
        <div className="prices">
          <div>
            <label for="minPrice">Min Price</label>
            <input
              type="text"
              id="minPrice"
              name="minPrice"
              placeholder="ex: 50%"
            />
          </div>
          <div>
            <label for="maxPrice">Max Price</label>
            <input
              type="text"
              id="maxPrice"
              name="maxPrice"
              placeholder="ex: 70%"
            />
          </div>
        </div>
        <div className="behaviour">
          <p>Bargaining Behaviour</p>
          <div className="radios">
            <button>low</button>
            <button>normal</button>
            <button>high</button>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adjust;
