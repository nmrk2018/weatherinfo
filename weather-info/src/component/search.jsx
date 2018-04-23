import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchSearchData } from '../actions/searchAction';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zip: "",
            city: "",
            zipLength: "",
            cityLength: ""
        }
        this.getWeather = this.getWeather.bind(this)
        this.onChange = this.onChange.bind(this)

    }

   /*  **this method will call the API and set the state in Action
     first preference is given to City if city is not available
     then it use zip** */
    getWeather() {
        if (this.state.city) {
            this.props.fetchSearchData('q=' + this.state.city);
        } else {
            this.props.fetchSearchData('zip=' + this.state.zip);
        }

    }

   // this method set the value to state and also check the length of the value
    onChange(event) {
        if (event.target.name === "zip") {
            if(event.target.value.length > 5) var zipLength = "Please enter less than 6 character"
            this.setState({ zip: event.target.value, zipLength: zipLength })
        }
        else {
            if(event.target.value.length > 15) var cityLength = "Please enter less than 16 character"
            this.setState({ city: event.target.value, cityLength: cityLength })
        }

    }
    render() {
        return (
            <div className="container">
                <Row className="show-grid">
                    <Col md={3}>Please Enter Zip Code :</Col>
                    <Col md={2}> <input type="text" name="zip" value={this.state.zip} onChange={this.onChange} /></Col>
                    <Col md={3} className="length-error">{this.state.zipLength}</Col>
                </Row>
                <Row className="show-grid search-row">
                    <Col md={4}>- OR -</Col>
                </Row>
                <Row className="show-grid">
                    <Col md={3}> Please Enter City Name</Col>
                    <Col md={2}> <input type="text" name="city" value={this.state.city} onChange={this.onChange} /></Col>
                    <Col md={3} className="length-error">{this.state.cityLength}</Col>
                </Row>
                <Row className="show-grid">
                <Col md={6}>
                <Button bsStyle="primary" className="search-button" onClick={this.getWeather}>Get Weather</Button>
                </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.item
})

export default connect(mapStateToProps, { fetchSearchData })(Search);
