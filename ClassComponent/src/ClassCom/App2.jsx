/* eslint-disable react/prop-types */

import React from "react";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myname: "Sanwwar hussain" };
  }
  static getDerivedStateFromProp(props) {
    return { myname: props.redColor };
  }

  render() {
    return <h1>I am App : {this.props.myname} </h1>;
  }
}

export default App2;
