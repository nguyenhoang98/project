import React, { Component } from "react";
import "./Form1.css";
import classNames from "classnames";
import { postApi } from "../../../../Apis/Auth";
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      price: "",
      quantity: "",
      userName: "",
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    postApi();
  }
  render() {
    const { code, price, quantity } = this.state;
    const { isOpenTabForm } = this.props;
    return (
      <div
        className={classNames("tab__form tab__form-1", {
          showTabForm: isOpenTabForm === 1,
        })}
      >
        <form onSubmit={this.handleOnSubmit}>
          <div className="group-form flex">
            <div className="col-4">
              <label>Mã HĐTL</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="group-form__input"
                placeholder="VN30F2104"
                name="code"
                value={code}
                onChange={this.handleOnchange}
                required
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
                name="price"
                value={price}
                onChange={this.handleOnchange}
                required
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
                name="quantity"
                value={quantity}
                onChange={this.handleOnchange}
                required
              />
            </div>
          </div>

          <div
            className="group-form"
            style={{
              textAlign: "right ",
            }}
          >
            <button type="submit" className="btn btn-buy">
              Mua
            </button>
            <button type="button" className="btn btn-sell">
              Bán
            </button>
            <input type="checkbox" />
            <span className="save">Lưu lệnh</span>
          </div>
        </form>
      </div>
    );
  }
}
export default Form1;
