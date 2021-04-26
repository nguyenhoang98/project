import React, { Component } from "react";
import "./MainOfPageHome.css";
import MainLeftTop from "../../Components/MainOfPageHome/MainLeftTop/MainLeftTop";
import MainLeftBottom from "../../Components/MainOfPageHome/MainLeftBottom/MainLeftBottom";
import MainCenterTop from "../../Components/MainOfPageHome/MainCenterTop/MainCenterTop";
import MainCenterBottom from "../../Components/MainOfPageHome/MainCenterBottom/MainCenterBottom";
import MenuChangeTab from "../../Components/MenuChangeTab/MenuChangeTab";
import MenuRightTop from "../../Components/MainOfPageHome/MainRightTop/MainRightTop";
import MenuChangeTabTradingView from "../../Components/MenuChangeTabTradingView/MenuChangeTabTradingView";
import MainRightBottom from "../../Components/MainOfPageHome/MainRightBottom/MainRightBottom";
class MainOfPageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenTab: 1,
      isOpenTabTradingView: 1,
      isOpenTabForm: 1,
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.handleChangeTabTradingView = this.handleChangeTabTradingView.bind(
      this
    );
    this.handleChangeTabForm = this.handleChangeTabForm.bind(this);
  }
  onChangePage(t) {
    this.setState({
      isOpenTab: t,
    });
  }
  handleChangeTabTradingView(t) {
    this.setState({
      isOpenTabTradingView: t,
    });
  }
  handleChangeTabForm(t) {
    this.setState({
      isOpenTabForm: t,
    });
  }
  render() {
    const { isOpenTab, isOpenTabTradingView, isOpenTabForm } = this.state;
    return (
      <div className="main grid">
        <div className="main__left">
          <MainLeftTop />
          <MainLeftBottom isOpenTabTradingView={isOpenTabTradingView} />
          <MenuChangeTabTradingView
            handleChangeTabTradingView={this.handleChangeTabTradingView}
          />
        </div>
        <div className="main__center">
          <MainCenterTop />
          <MainCenterBottom />
        </div>
        <div className="main__right">
          <MenuRightTop isOpenTab={isOpenTab} />
          <MainRightBottom
            isOpenTabForm={isOpenTabForm}
            handleChangeTabForm={this.handleChangeTabForm}
          />
          <MenuChangeTab onChangePage={this.onChangePage} />
        </div>
      </div>
    );
  }
}
export default MainOfPageHome;
