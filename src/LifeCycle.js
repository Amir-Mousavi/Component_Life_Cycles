import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "User"
    };

    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");

    if (props.firstName) {
      return {
        firstName: props.firstName
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");

    return true;
  }

  changeName = () => this.setState({ name: "Amir" });

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        Welcome <strong>{this.state.name}</strong>
        <hr />
        <button onClick={this.changeName}>Chnage the name</button>
      </div>
    );
  }
}
