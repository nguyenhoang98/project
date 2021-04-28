import React, { Component } from "react";
import "./MainRightBottom.css";
import classNames from "classnames";
import Form1Container from "../../../Containers/Form1Container/Form1Container";
import Form2 from "./Form2/Form2";
import ControlTab from "./ControlTab/ControlTab";
class MainRightBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isOpenTabForm, handleChangeTabForm } = this.props;
    console.log(isOpenTabForm);
    return (
      <div className="main__right__bottom">
        <div className="main__right__bottom__content">
          <ControlTab handleChangeTabForm={handleChangeTabForm} />
          <Form1Container isOpenTabForm={isOpenTabForm} />
          <Form2 isOpenTabForm={isOpenTabForm} />
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
