import React, { Component } from "react";
import { ReactReduxContext } from "react-redux";

class MainRightTopItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <tr>
        <td>
          {" "}
          {data.status === "PendingNew" ? (
            <span>
              <input type="checkbox" />
            </span>
          ) : (
            ""
          )}{" "}
        </td>
        <td>{data.side === "NB" ? "Mua" : data.side === "NS" ? "Bán" : ""} </td>
        <td>{data.symbol} </td>
        <td>
          {data.matchedQuantity}/{data.quantity}{" "}
        </td>
        <td> {data.orderType} </td>
        <td>
          <span>
            {data.status === "PendingNew" ? (
              <span>
                {" "}
                <i class="fa fa-hourglass-start" aria-hidden="true"></i>{" "}
              </span>
            ) : (
              <span>
                <i class="fa fa-minus-circle" aria-hidden="true"></i>
              </span>
            )}
          </span>
        </td>
        <td>
          {" "}
          {data.status === "PendingNew" ? (
            <span>
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </span>
          ) : (
            ""
          )}{" "}
        </td>
      </tr>
    );
  }
}
export default MainRightTopItem;
