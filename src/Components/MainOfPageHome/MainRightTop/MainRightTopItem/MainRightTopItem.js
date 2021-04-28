import React, { Component } from "react";
class MainRightTopItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <tr>
        <td>
          {data.status === "PendingNew" ? (
            <span>
              <input type="checkbox" />
            </span>
          ) : (
            ""
          )}
        </td>
        <td
          style={{
            color: "#0f0",
          }}
        >
          {data.side === "NB" ? (
            <span
              style={{
                color: "#0f0",
              }}
            >
              Mua
            </span>
          ) : data.side === "NS" ? (
            <span
              style={{
                color: "red",
              }}
            >
              Bán
            </span>
          ) : (
            ""
          )}{" "}
        </td>
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
                <i
                  className="fa fa-hourglass-start"
                  aria-hidden="true"
                ></i>{" "}
              </span>
            ) : (
              <span
                style={{
                  color: "red",
                }}
              >
                <i className="fa fa-minus-circle" aria-hidden="true"></i>
              </span>
            )}
          </span>
        </td>
        <td>
          {data.status === "PendingNew" ? (
            <span
              style={{
                color: "red",
              }}
            >
              <i class="fa fa-hourglass-start" aria-hidden="true"></i>
            </span>
          ) : data.status === "Rejected" ? (
            <span
              style={{
                color: "red",
              }}
            >
              <i className="fa fa-times-circle-o" aria-hidden="true"></i>
            </span>
          ) : (
            ""
          )}
        </td>
        <td></td>
      </tr>
    );
  }
}
export default MainRightTopItem;
