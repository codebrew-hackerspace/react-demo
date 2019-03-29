import React, { Component } from "react";
import { Button, ButtonGroup } from 'reactstrap';
class NumberOfItems extends Component {
  render() {
    return (
      <div>
        <ButtonGroup size="sm">
          <Button  outline color="success" onClick={this.props.add}>+</Button>
          <Button  outline color="danger" onClick={this.props.subtract}>-</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default NumberOfItems;