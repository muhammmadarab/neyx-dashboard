import React from "react";
import "./Table.css";

function Table() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Product Name</th>
          <th>Categories</th>
          <th>Start At</th>
          <th>Conversation rate</th>
          <th>Time</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Antonio Christ</td>
          <td>Nike Shirt</td>
          <td>Shirt</td>
          <td>08:00 am</td>
          <td className="convo-done">+0.3</td>
          <td>23s</td>
          <td>$23</td>
          <td>
            <i class="fa fa-circle convo-on" aria-hidden="true"></i> Ongoing
          </td>
        </tr>
        <tr>
          <td>Angelina Jouli</td>
          <td>Titan Watch</td>
          <td>Accessories</td>
          <td>08:00 pm</td>
          <td className="convo-done">+0.7</td>
          <td>27s</td>
          <td>$100</td>
          <td>
            <i class="fa fa-circle convo-done" aria-hidden="true"></i> Completed
          </td>
        </tr>
        <tr>
          <td>Darab Ahmed</td>
          <td>Adidas Shoes</td>
          <td>Footwear</td>
          <td>02:00 am</td>
          <td className="convo-stop">-0.4</td>
          <td>24s</td>
          <td>$40</td>
          <td>
            <i class="fa fa-circle convo-stop" aria-hidden="true"></i> Stopped
          </td>
        </tr>
        <tr>
          <td>Leonardis</td>
          <td>Spoon Set</td>
          <td>Kitchenware</td>
          <td>12:00 pm</td>
          <td className="convo-done">+0.9</td>
          <td>35s</td>
          <td>$50</td>
          <td>
            <i class="fa fa-circle convo-on" aria-hidden="true"></i> Ongoing
          </td>
        </tr>
        <tr>
          <td>Antonio Christ</td>
          <td>Nike Shirt</td>
          <td>Shirt</td>
          <td>12:15 am</td>
          <td className="convo-stop">-0.9</td>
          <td>23s</td>
          <td>$23</td>
          <td>
            <i class="fa fa-circle convo-on" aria-hidden="true"></i> Ongoing
          </td>
        </tr>
        <tr>
          <td>Antonio Christ</td>
          <td>Nike Shirt</td>
          <td>Shirt</td>
          <td>08:00 am</td>
          <td className="convo-done">+0.3</td>
          <td>23s</td>
          <td>$23</td>
          <td>
            <i class="fa fa-circle convo-on" aria-hidden="true"></i> Ongoing
          </td>
        </tr>
        <tr>
          <td>Angelina Jouli</td>
          <td>Titan Watch</td>
          <td>Accessories</td>
          <td>08:00 pm</td>
          <td className="convo-done">+0.7</td>
          <td>27s</td>
          <td>$100</td>
          <td>
            <i class="fa fa-circle convo-done" aria-hidden="true"></i> Completed
          </td>
        </tr>
        <tr>
          <td>Darab Ahmed</td>
          <td>Adidas Shoes</td>
          <td>Footwear</td>
          <td>02:00 am</td>
          <td className="convo-stop">-0.4</td>
          <td>24s</td>
          <td>$40</td>
          <td>
            <i class="fa fa-circle convo-stop" aria-hidden="true"></i> Stopped
          </td>
        </tr>
        <tr>
          <td>Leonardis</td>
          <td>Spoon Set</td>
          <td>Kitchenware</td>
          <td>12:00 pm</td>
          <td className="convo-done">+0.9</td>
          <td>35s</td>
          <td>$50</td>
          <td>
            <i class="fa fa-circle convo-on" aria-hidden="true"></i> Ongoing
          </td>
        </tr>
        <tr>
          <td>Antonio Christ</td>
          <td>Nike Shirt</td>
          <td>Shirt</td>
          <td>12:15 am</td>
          <td className="convo-stop">-0.9</td>
          <td>23s</td>
          <td>$23</td>
          <td>
            <i class="fa fa-circle convo-on" aria-hidden="true"></i> Ongoing
          </td>
        </tr>
        <tr>
          <td>Antonio Christ</td>
          <td>Nike Shirt</td>
          <td>Shirt</td>
          <td>12:15 am</td>
          <td className="convo-stop">-0.9</td>
          <td>23s</td>
          <td>$23</td>
          <td>
            <i class="fa fa-circle convo-on" aria-hidden="true"></i> Ongoing
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
