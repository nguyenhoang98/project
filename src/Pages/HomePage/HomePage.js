import React, { Component } from "react";
import "./HomePage.css";
import MainOfPageHome from "../../Components/MainOfPageHome/MainOfPageHome";

class HomePage extends Component {
  constructor(props) {
    super(props);
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
