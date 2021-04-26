import React, { Component } from "react";
import "./LoginPage.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { postApi } from "../../Apis/Auth/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
    this.handleOnLogin = this.handleOnLogin.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentDidMount() {}
  handleOnChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleOnLogin(e) {
    e.preventDefault();
    const { user, password } = this.state;
    const { history } = this.props;
    const { push } = history;
    postApi("https://auth-api.vndirect.com.vn/v2/auth", {
      username: user,
      password: password,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.token);
          localStorage.setItem("vnd", res.data.token);
          if (localStorage.getItem("vnd") === res.data.token) {
            push("/home");
            toast("Đăng Nhập thành công !");
          }
        }
      })
      .catch((err) => {
        toast("Đăng Nhập không thành công !");
      });
  }
  render() {
    const { user, password } = this.state;
    return (
      <div className="loginpage">
        <div className="loginpage__form">
          <div className="loginpage__form__title">
            Đăng nhập với tài khoản VNDIRECT
          </div>
          <form
            onSubmit={this.handleOnLogin}
            className="loginpage__form__content"
          >
            <div className="group-form">
              <label htmlFor="userName" className="group-form__label">
                Tên đăng nhập :
              </label>
              <input
                type="text"
                id="userName"
                className="group-form__input__login"
                value={user}
                name="user"
                onChange={this.handleOnChange}
                required
              />
            </div>
            <div className="group-form">
              <label htmlFor="passName" className="group-form__label">
                Mật khẩu :
              </label>
              <input
                type="text"
                id="passName"
                className="group-form__input__login"
                value={password}
                name="password"
                onChange={this.handleOnChange}
                required
              />
            </div>
            <div className="group-form">
              <input type="checkbox" />
              <span
                style={{
                  paddingLeft: 10,
                }}
              >
                Ghi nhớ trạng thái đăng nhập trên trình duyệt này
              </span>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </div>
            <div className="group-form">
              <button className="btn btn-login">
                <span>
                  <i className="fa fa-sign-in" aria-hidden="true"></i>
                </span>
                &nbsp; Đăng nhập
              </button>
            </div>
          </form>

          <div className="loginpage__form__help">
            <div
              style={{
                width: "60%",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <div className="group-form">
                <button className="btn btn-open-account">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                  &nbsp; Mở tài khoản
                </button>
              </div>
              <div className="group-form">
                <Link to="/help-page" className="link-help">
                  Trợ giúp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginPage);
