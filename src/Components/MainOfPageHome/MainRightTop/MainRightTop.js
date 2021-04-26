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
          Tab 1
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
