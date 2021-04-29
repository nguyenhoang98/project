import React, { Component } from "react";
import "./MainRightTop.css";
import MainRightTopTab1Container from "../../../Containers/MainRightTopTab1Container/MainRightTopTab1Container";
import MainRightTopTab2Container from "../../../Containers/MainRightTopTab2Container/MainRightTopTab2Container";
import MainRightTopTab3 from "./MainRightTopTab3/MainRightTopTab3";
class MenuRightTop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpenTab } = this.props;
    return (
      <div className="main__right__top">
        <MainRightTopTab1Container isOpenTab={isOpenTab} />
        <MainRightTopTab2Container isOpenTab={isOpenTab} />
        <MainRightTopTab3 isOpenTab={isOpenTab} />
      </div>
    );
  }
}
export default MenuRightTop;
