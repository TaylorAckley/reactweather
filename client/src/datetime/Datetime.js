import React, { Component } from 'react';
import './Datetime.css';

class Datetime extends Component {
    constructor() {
        super();
        this.state = {
            dt: null
        };
    }

    componentDidMount() {
        fetch('/api/app/moment')
            .then(result => {
                return result.json();
            })
            .then(data => {
                this.setState({
                    dt: data
                });
            })
    }
    render() {
        return (
            <span className="Datetime">{this.state.dt}</span>
        );
    }
}

export default Datetime;
