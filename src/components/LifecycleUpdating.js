import React, { Component } from "react";

export default class LifecycleUpdating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "fahim",
    };
    console.log("constructor ran");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log("getSnapshortBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  updateHandler = () => {
    this.setState({
      name: "sadril",
    });
  };
  render() {
    return (
      <div>
        <h1>name: {this.state.name}</h1>
        <button onClick={this.updateHandler}>update state</button>
      </div>
    );
  }
}
