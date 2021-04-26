import React, { Component } from "react";
import "./ModelTopPlayer.css";
import Logo from "../../Assets/caothu.png";
import ImgCup from "../../Assets/cup.png";
import ImgSilver from "../../Assets/silver.png";
import ImgCopper from "../../Assets/copper.png";
class ModelTopPlayer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleCloseModelTopPlayer, isOpenModelTopPlayer } = this.props;
    console.log(isOpenModelTopPlayer);
    return (
      <div className="modeltopplayer">
        <div
          className={
            isOpenModelTopPlayer === true
              ? "modeltopplayer__content animation__model"
              : "modeltopplayer__content"
          }
        >
          <div
            className="modeltopplayer__close"
            onClick={handleCloseModelTopPlayer}
          >
            &times;
          </div>
          <div className="flex">
            <div className="col-6 modeltopplaye__left">
              <div className="modeltopplaye__left__img">
                <img src={Logo} className="modeltopplayer__logo" />
              </div>

              <div className="modeltopplaye__left__title">
                <h2>BẢNG XẾP HẠNG THÁNG</h2>
              </div>

              <div className="flex">
                <span
                  style={{
                    fontSize: 13,
                  }}
                >
                  CAO THỦ PHÁI SINH
                </span>
                <span
                  style={{
                    fontSize: 10,
                  }}
                >
                  Đơn vị : VND
                </span>
              </div>

              <div className="modeltopplaye__left__list">
                <div className="modeltopplaye__left__item">
                  <img src={ImgCup} className="img-top-player" />
                </div>
                <div className="modeltopplaye__left__item">
                  <img src={ImgSilver} className="img-top-player" />
                </div>
                <div className="modeltopplaye__left__item">
                  <img src={ImgCopper} className="img-top-player" />
                </div>
              </div>

              <div className="modeltopplaye__left__list__all">
                <div className="modeltopplaye__left__item__all"></div>
                <div className="modeltopplaye__left__item__all"></div>
                <div className="modeltopplaye__left__item__all"></div>
                <div className="modeltopplaye__left__item__all"></div>
                <div className="modeltopplaye__left__item__all"></div>
                <div className="modeltopplaye__left__item__all"></div>
                <div className="modeltopplaye__left__item__all"></div>
              </div>

              <div className="modeltopplaye__left__action">
                <button className="btn btn-modeltopplaye__left__action">
                  Tham giá tại đây
                </button>
              </div>
            </div>
            <div className="col-6 modeltopplaye__right">
              <div className="modeltopplayer__right__title">
                <h2>BẢNG XẾP HẠNG TUẦN</h2>
                <p>(Từ 8h00 thứ 2 đến 15H00 thứ 6 hàng tuần)</p>
              </div>
              <div className="content">
                <div
                  className="flex"
                  style={{
                    padding: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                    }}
                  >
                    CAO THỦ PHÁI SINH
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                    }}
                  >
                    Đơn vị : VND
                  </span>
                </div>

                <div className="modeltopplaye__right__list">
                  <div className="modeltopplaye__right__item"></div>
                  <div className="modeltopplaye__right__item"></div>
                  <div className="modeltopplaye__right__item"></div>
                </div>
                <div className="modeltopplaye__right__list__all">
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                  <div className="modeltopplaye__right__item__all"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelTopPlayer;
