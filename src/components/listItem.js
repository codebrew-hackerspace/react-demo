import React, { Component } from "react";
import NumberOfItems from "./numberOfItems"

import { Container, Row, Col } from 'reactstrap';

class ListItem extends Component {
    state = {
        number: 0
    }

    add = () => {
        this.setState({ number: Math.max(this.state.number + 1, 0) })
    }
    subtract = () => {
        this.setState({ number: Math.max(this.state.number - 1, 0) })
    }
    render() {
        return (
            <div style={{ width: "25%" }}>
                <Row>
                    <Col xs="6" sm="4">{this.props.item + " "}</Col>
                    <Col xs="6" sm="4">{this.state.number + " "}</Col>
                    <Col xs="6" sm="4"><NumberOfItems add={this.add} subtract={this.subtract} style={{ float: "left", width: "150px" }} /></Col>
                </Row>
            </div>
        );
    }
}

export default ListItem;