import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class Result extends Component {
    render() {
        const { name, date, humidity, temp, temp_max, temp_min, error } = this.props.item

        if (error) {
            // displaying error message if getting error from API
            return (
                <Row className="show-grid result-error">
                    <Col>
                        <p >City not found, Please Enter a correct City name or Zip Code</p>
                    </Col>
                </Row>
            )
            // if data is not getting returned from API, rendering nothing.
        } else if (!name) {
            return ""
        }

        else {
            return (
                <div className="container">
                    <Row className="show-grid result-title">
                        <Col md={8}>
                            <p >Please find below weather information of {name}</p>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2}>Date :</Col>
                        <Col md={2}>{date}</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2}>Current Temp :</Col>
                        <Col md={2}>{Math.round(temp)} &#8451;</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2}>Low Temp :</Col>
                        <Col md={2}>{Math.round(temp_min)} &#8451;</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2}>High Temp :</Col>
                        <Col md={2}>{Math.round(temp_max)} &#8451;</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2}>Humidity :</Col>
                        <Col md={2}>{Math.round(humidity)} %</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={2}>City/State :</Col>
                        <Col md={2}>{name}</Col>
                    </Row>
                </div>
            )
        }
    }

}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {})(Result); 
