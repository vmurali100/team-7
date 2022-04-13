import React, { Component } from "react";

export const HOComponent = (EmptyComponent) => {

  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    hanldeDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    render() {
      return (
        <EmptyComponent
          count={this.state.count}
          incrementCount={this.handleIncrement}
          decrementCount={this.hanldeDecrement}
        />
      );
    }
  }


  return NewComponent
};
