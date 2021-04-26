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
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 3fr 1fr",
              padding: 10,
            }}
          >
            <div>Lệnh trong ngày</div>
            <div>Lệnh điều kiện</div>
            <div>
              <span>
                <i class="fa fa-refresh" aria-hidden="true"></i>
              </span>
              <span
                style={{
                  padding: "0px 10px",
                }}
              >
                <i class="fa fa-minus" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <table
            style={{
              width: "100%",
              fontSize: 12,
            }}
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
