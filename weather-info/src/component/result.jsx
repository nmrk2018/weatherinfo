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
                        City not found, Please Enter a correct City name or Zip Code
                    </Col>
                </Row>
            )
            // if data is not getting returned from API, rendering nothing.
        } else if (!name) {
            return ""
        }

        else {
            return (
                <div>
                <Row className="show-grid result-title">
                <Col md={8}>
                    <p >Please find below weather information of {name}</p>
                </Col>
                </Row>
                <div className="result-container">
                    <Row className="show-grid">
                        <Col xs={6} className="result-label text-left">Date :</Col>
                        <Col xs={6} className="result-value text-left">{date}</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} className="result-label text-left">Current Temp :</Col>
                        <Col xs={6} className="result-value text-left">{Math.round(temp)} &#8451;</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} className="result-label text-left">Low Temp :</Col>
                        <Col xs={6} className="result-value text-left">{Math.round(temp_min)} &#8451;</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} className="result-label text-left">High Temp :</Col>
                        <Col xs={6} className="result-value text-left">{Math.round(temp_max)} &#8451;</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} className="result-label text-left">Humidity :</Col>
                        <Col xs={6} className="result-value text-left">{Math.round(humidity)} %</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} className="result-label text-left">City/State :</Col>
                        <Col xs={6} className="result-value text-left">{name}</Col>
                    </Row>
                </div>
                </div>
            )
        }
    }

}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {})(Result); 
