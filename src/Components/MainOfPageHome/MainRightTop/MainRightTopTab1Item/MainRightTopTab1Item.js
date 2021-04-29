import React, { useState } from "react";
import "./MainRightTopTab1Item.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import PropTypes from "prop-types";

MainRightTopTab1Item.propTypes = {};

function MainRightTopTab1Item(props) {
  const [isOpenBtn, setIsOpenBtn] = useState(false);
  const { data } = props;
  function handleOnShowBtn() {
    setIsOpenBtn(true);
  }
  function handleOnCloseBtn() {
    setIsOpenBtn(false);
  }
  function handleDelete(id) {
    setIsOpenBtn(true);
    console.log("username", jwt_decode(localStorage.getItem("vnd")).username);
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    axios("https://dertrial-api.vndirect.com.vn/demotrade/orders", {
      method: "DELETE",
      data: {
        orderID: id,
        userName: jwt_decode(localStorage.getItem("vnd")).username,
      },
      config,
    })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    handleOnCloseBtn();
  }
  return (
    <tr>
      <td>
        {data.status === "New" ? (
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
        <span
          style={{
            color: "#f7941d",
          }}
        >
          {data.matchedQuantity}
        </span>
        /{data.quantity}
      </td>
      <td> {data.orderType} </td>
      <td>
        {data.status === "new" || data.status === "PendingNew" ? (
          <span
            style={{
              color: "red",
              padding: "0 2px ",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                color: "#f8a01b",
              }}
            >
              <i class="fa fa-hourglass-half" aria-hidden="true"></i>
            </span>
          </span>
        ) : data.status === "Cancelled" ? (
          <span
            className="text-purple"
            style={{
              cursor: "pointer",
              color: "#af449c",
            }}
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
        ) : (
          <span
            style={{
              color: "red",
              padding: "0 2px ",
            }}
          >
            <i className="fa fa-minus-circle" aria-hidden="true"></i>
          </span>
        )}
      </td>
      <td
        style={{
          width: 90,
          textAlign: "right",
        }}
      >
        {isOpenBtn === true ? (
          <span>
            <button
              className="btn btn-delete"
              onClick={() => handleDelete(data.orderID)}
            >
              Hủy
            </button>
            <button className="btn btn-zero" onClick={handleOnCloseBtn}>
              Không
            </button>
          </span>
        ) : (
          <span>
            {data.status === "New" || data.cancelable ? (
              <span
                style={{
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={handleOnShowBtn}
              >
                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
              </span>
            ) : (
              ""
            )}
          </span>
        )}
      </td>
    </tr>
  );
}

export default MainRightTopTab1Item;
