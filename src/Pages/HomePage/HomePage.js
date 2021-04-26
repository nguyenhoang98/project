import React, { Component } from "react";
import "./HomePage.css";
import MainOfPageHome from "../../Components/MainOfPageHome/MainOfPageHome";

class HomePage extends Component {
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
  componentDidMount() {}
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
    return (
      <div className="homepage">
        <MainOfPageHome />
      </div>
    );
  }
}
export default HomePage;
