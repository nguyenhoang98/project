import React, { Component } from "react";
import "./MainRightBottom.css";
import classNames from "classnames";

class MainRightBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpenTabForm, handleChangeTabForm } = this.props;
    console.log(isOpenTabForm);
    return (
      <div className="main__right__bottom">
        <div className="main__right__bottom__content">
          <div className="tab__radio flex">
            <label
              className="tab__radio__btn"
              htmlFor="tab-radio-1"
              onClick={() => handleChangeTabForm(1)}
            >
              <input type="radio" name="tab-radio" id="tab-radio-1" />
              Lệnh thường
            </label>
            <label
              className="tab__radio__btn"
              htmlFor="tab-radio-2"
              onClick={() => handleChangeTabForm(2)}
            >
              <input type="radio" name="tab-radio" id="tab-radio-2" />
              Lệnh stop
            </label>
            <label
              className="tab__radio__btn"
              disabled={true}
              htmlFor="tab-radio-3"
              //   onClick={() => handleChangeTabForm(3)}
              disabled
            >
              <input type="radio" name="tab-radio" id="tab-radio-3" />
              Lệnh trailing
            </label>
            <label
              className="tab__radio__btn"
              htmlFor="tab-radio-4"
              //   onClick={() => handleChangeTabForm(4)}
            >
              <input type="radio" name="tab-radio" id="tab-radio-4" />
              Lệnh SOS
            </label>
          </div>

          <div
            className={classNames("tab__form tab__form-1", {
              showTabForm: isOpenTabForm === 1,
            })}
          >
            <form>
              <div className="group-form flex">
                <div className="col-4">
                  <label>Mã HĐTL</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="group-form__input"
                    placeholder="VN30F2104"
                  />
                </div>
              </div>
              <div className="group-form flex">
                <div className="col-4">
                  <label>Giá đặt</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="group-form__input"
                    placeholder="Giá"
                  />
                </div>
              </div>
              <div className="group-form flex">
                <div className="col-4">
                  <label>Khối lượng</label>
                </div>
                <div className="col-8 flex">
                  <input
                    type="text"
                    className="group-form__input"
                    placeholder="Khối Lượng"
                  />
                </div>
              </div>

              <div
                className="group-form"
                style={{
                  textAlign: "right ",
                }}
              >
                <button className="btn btn-buy">Mua</button>
                <button className="btn btn-sell">Bán</button>
                <input type="checkbox" />
                <span className="save">Lưu lệnh</span>
              </div>
            </form>
          </div>
          <div
            className={classNames("tab__form tab__form-2", {
              showTabForm: isOpenTabForm === 2,
            })}
          >
            <form>
              <div className="group-form flex">
                <div className="col-4">
                  <label>Mã HĐTL</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="group-form__input"
                    placeholder="VN30F2104"
                  />
                </div>
              </div>
              <div className="group-form flex">
                <div className="col-4">
                  <label>Giá đặt</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="group-form__input"
                    placeholder="Giá"
                  />
                </div>
              </div>
              <div className="group-form flex">
                <div className="col-4">
                  <label>Khối lượng</label>
                </div>
                <div className="col-8 flex">
                  <input
                    type="text"
                    className="group-form__input"
                    placeholder="Khối Lượng"
                  />
                </div>
              </div>

              <div className="group-form flex">
                <div className="col-4">
                  <label>Giá trị khớp</label>
                </div>
                <div className="col-8 flex">
                  <div className="col-2">
                    <button className="btn btn-next">a</button>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-prev">b</button>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      className="group-form__input"
                      placeholder="Ngày hết hạn"
                    />
                  </div>
                </div>
              </div>

              <div className="group-form flex">
                <div className="col-4">
                  <label>Ngày hết hạn </label>
                </div>
                <div className="col-8 flex">
                  <input
                    type="text"
                    className="group-form__input"
                    placeholder="Ngày hết hạn"
                  />
                </div>
              </div>

              <div
                className="group-form"
                style={{
                  textAlign: "center ",
                }}
              >
                <button className="btn btn-buy">Mua</button>
                <button className="btn btn-sell">Bán</button>
              </div>
            </form>
          </div>
          <div
            className={classNames("tab__form tab__form-3", {
              showTabForm: isOpenTabForm === 3,
            })}
          >
            3
          </div>
          <div
            className={classNames("tab__form tab__form-4", {
              showTabForm: isOpenTabForm === 4,
            })}
          >
            4
          </div>
        </div>
      </div>
    );
  }
}
export default MainRightBottom;
