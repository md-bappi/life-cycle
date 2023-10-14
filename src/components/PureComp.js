import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    console.log("pure component");
    return (
      <div>
        <h1>This is a pure component: {this.props.number}</h1>
      </div>
    );
  }
}
