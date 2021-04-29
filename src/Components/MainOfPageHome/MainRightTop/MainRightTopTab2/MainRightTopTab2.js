import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
MainRightTopTab2.propTypes = {};

function MainRightTopTab2(props) {
  const { isOpenTab } = props;
  return (
    <div
      className={classNames("main__right__top__item item-2", {
        showTab: isOpenTab === 2,
      })}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 3fr 1fr",
          padding: 10,
          fontSize: 12,
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          Lệnh trong ngày
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          Lệnh điều kiện
        </div>
        <div>
          <span>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </span>
          <span
            style={{
              padding: "0px 10px",
            }}
          >
            <i className="fa fa-minus" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <table
        style={{
          width: "100%",
          height: "auto",
          fontSize: 14,
          color: "#fff",
        }}
      >
        <thead>
          <tr>
            <th>Mã</th>
            <th>KL</th>
            <th>Giá vốn</th>
            <th>Giá hiện tại</th>
            <th colSpan="2"> +/- </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default MainRightTopTab2;
