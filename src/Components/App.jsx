import React, { Component, Fragment } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

import Exercises from "./Exercises/Exercises";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
