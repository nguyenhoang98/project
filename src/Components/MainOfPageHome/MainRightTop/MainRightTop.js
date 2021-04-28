import React, { Component } from "react";
import "./MainRightTop.css";
import classNames from "classnames";
class MenuRightTop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpenTab } = this.props;
    return (
      <div className="main__right__top">
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
                <th>Khối lượng khớp</th>
                <th>Giá</th>
                <th>TT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
        <div
          className={classNames("main__right__top__item item-2", {
            showTab: isOpenTab === 2,
          })}
        >
          Tab 2
        </div>
        <div
          className={classNames("main__right__top__item item-3", {
            showTab: isOpenTab === 3,
          })}
        >
          Tab 3
        </div>
      </div>
    );
  }
}
export default MenuRightTop;
