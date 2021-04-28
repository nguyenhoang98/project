import React, { Component } from "react";
import "./Nav.css";
import LOGO_VND from "../../Assets/logo.svg";
import { NavLink, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      usename: "",
    };
    this.handleOnLogOut = this.handleOnLogOut.bind(this);
  }
  componentDidMount() {
    this.timeID = this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
    var token = localStorage.getItem("vnd");
    var decoded = jwt_decode(token);
    console.log(decoded);
    this.setState({
      usename: decoded.customerName,
    });
  }
  formatTime(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }
  getTime() {
    const d = new Date();
    const h = this.formatTime(d.getHours());
    const m = this.formatTime(d.getMinutes());
    const s = this.formatTime(d.getSeconds());
    const date = this.formatTime(d.getDate());
    const month = this.formatTime(d.getMonth() + 1);
    const y = this.formatTime(d.getFullYear());
    this.setState({
      time: h + ":" + m + ":" + s + " " + date + "-" + month + "-" + y,
    });
  }
  handleOnLogOut() {
    console.log(this.props);
    const { history } = this.props;
    const { push } = history;
    localStorage.removeItem("vnd");
    push("/login-page");
  }
  render() {
    const { time, usename } = this.state;
    const { handleShowModelTopPlayer } = this.props;
    return (
      <div className="nav flex">
        <div className="nav__left">
          <ul className="flex">
            <li>
              <img src={LOGO_VND} className="logo-vnd" />
            </li>
            <li>
              <span className="time">{time}</span>
            </li>
            <li>
              <NavLink to="/home" activeClassName="action_page" exact={true}>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/asset-page" activeClassName="action_page">
                Tài sản
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutorial-page" activeClassName="action_page">
                Hướng Dẫn
              </NavLink>
            </li>
            <li>
              <a href="#">Lãi Lỗ</a>
            </li>
            <li
              style={{
                marginLeft: 10,
              }}
            >
              <button
                className="btn top-btn-model"
                onClick={handleShowModelTopPlayer}
              >
                <i className="fa fa-trophy" aria-hidden="true"></i>
                Top cao thủ phái sinh
              </button>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <ul className="flex">
            <li>
              <button className="btn-trial">Bản trial</button>
            </li>
            <li
              style={{
                marginLeft: 6,
              }}
            >
              <a href="#" className="btn-upgrade-account">
                Nâng cấp tài khoản
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user" aria-hidden="true"></i>
                &nbsp; {usename} &nbsp;
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
              <div className="logout">
                <button
                  className="btn btn-logout"
                  onClick={this.handleOnLogOut}
                >
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                  &nbsp; logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(Nav);
