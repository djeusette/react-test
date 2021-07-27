// Is there a problem with that implementation?
// If so, what is it and how would you fix it?

import React, { Component } from "react";

export class Test extends Component {
  constructor() {
    this.state = { value: { foo: "bar" } };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let value = this.state.value;
    value.foo += "bar";
    this.setState({ value: value });
  }

  render() {
    return (
      <div>
        <InnerComponent value={this.state.value} />
        <a onClick={this.onClick}>Click me</a>
      </div>
    );
  }
}

export class InnerComponent extends Component {
  static propTypes = {
    value: PropTypes.object.isRequired,
  };

  render() {
    // ...
  }
}
