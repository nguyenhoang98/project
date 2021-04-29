import React from "react";
import "./MainRightTopTab2Item.css";
import PropTypes from "prop-types";

MainRightTopTab2Item.propTypes = {};

function MainRightTopTab2Item(props) {
  const { data } = props;
  console.log(data);
  return (
    <tr>
      <td
        style={{
          color: "rgb(0, 255, 0)",
        }}
      >
        {" "}
        {data.symbol}{" "}
      </td>
      <td> {data.quantity} </td>
      <td> {data.costPrice} </td>
      <td>empty</td>
      <td>empty</td>
      <td>
        <button className="btn btn-close">Đóng</button>
        <button className="btn btn-reverse">Đảo</button>
      </td>
    </tr>
  );
}

export default MainRightTopTab2Item;
