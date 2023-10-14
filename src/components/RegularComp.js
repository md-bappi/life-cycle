import React, { Component } from "react";

export default class RegularComp extends Component {
  render() {
    console.log("regular component");
    return (
      <div>
        <h1>Regular component: {this.props.number}</h1>
      </div>
    );
  }
}
