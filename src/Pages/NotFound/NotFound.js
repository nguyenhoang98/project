import React, { Component } from "react";
import "./NotFound.css";
import ImgNotFound from "../../Assets/not-found.png";

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="notfound">
        <img src={ImgNotFound} className="notfound__img" />
      </div>
    );
  }
}
export default NotFound;
