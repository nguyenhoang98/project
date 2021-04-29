import React, { useEffect, useState } from "react";
import "./Nav.css";
import LOGO_VND from "../../Assets/logo.svg";
import { NavLink, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import useSWR from "swr";
import PropTypes from "prop-types";
Nav.propTypes = {};

const fetcher = (x) => {
  return fetch(x).then((res) => res.json());
};
function Nav(props) {
  const [time, setTime] = useState("");
  const [userName, setUserName] = useState("");
  const { handleShowModelTopPlayer } = props;
  useEffect(() => {
    setUserName(jwt_decode(localStorage.getItem("vnd")).customerName);
    getTime();
    setInterval(getTime, 1000);
  }, []);

  const { data, error } = useSWR(
    `https://dertrial-api.vndirect.com.vn/demotrade/assets?username=${
      jwt_decode(localStorage.getItem("vnd")).username
    }`,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  function formatTime(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }
  function getTime() {
    const d = new Date();
    const h = formatTime(d.getHours());
    const m = formatTime(d.getMinutes());
    const s = formatTime(d.getSeconds());
    const date = formatTime(d.getDate());
    const month = formatTime(d.getMonth() + 1);
    const y = formatTime(d.getFullYear());
    setTime(h + ":" + m + ":" + s + " " + date + "/" + month + "/" + y);
  }
  function handleOnLogOut() {
    const { history } = props;
    const { push } = history;
    localStorage.removeItem("vnd");
    push("/login-page");
  }
  console.log(data);
  return (
    <div className="nav flex">
      <div className="nav__left">
        <ul className="flex">
          <li>
            <img src={LOGO_VND} className="logo-vnd" />
          </li>
          <li>
            <span
              className="time text-orange"
              style={{
                color: "#f7941d",
              }}
            >
              {time}
            </span>
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
          <li
            style={{
              borderRight: "none",
            }}
          >
            <NavLink to="/tutorial-page" activeClassName="action_page">
              Hướng Dẫn
            </NavLink>
          </li>
          <li
            style={{
              borderRight: "none",
            }}
          >
            <span
              className="text-orange"
              style={{
                color: "#f7941d",
              }}
            >
              Lãi/Lỗ:
              <span
                style={{
                  color: "#ffd900",
                }}
              >
                {data.cashOnHand}đ
              </span>
            </span>
          </li>
          <li
            style={{
              marginLeft: 30,
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
              &nbsp; {userName} &nbsp;
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <div className="logout">
              <button className="btn btn-logout" onClick={handleOnLogOut}>
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

export default withRouter(Nav);
