import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
MainRightTopTab1.propTypes = {};

function MainRightTopTab1(props) {
  const { isOpenTab } = props;
  return (
    <div
      className={classNames("main__right__top__item item-1", {
        showTab: isOpenTab === 1,
      })}
      style={{
        overflow: "auto",
        height: "100%",
      }}
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
          position: "absolute",
          width: "100%",
          height: "auto",
          fontSize: 14,
          overflow: "auto",
        }}
        className="mainrighttop-table"
      >
        <thead>
          <tr>
            <th></th>
            <th>Lệnh</th>
            <th>Mã</th>
            <th>KL khớp</th>
            <th>Giá</th>
            <th>TT</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default MainRightTopTab1;
