import React from 'react';
import Attender from './Attender';
import base from '../base';
import DatePicker from 'react-date-picker';


class Availability extends React.Component {

    // create state
    constructor(props) {
        super(props);
        this.state = {
            //set this to current month
            date: new Date(),
            events: {},
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.ref = base.syncState('BadgerSett/events', {
            context: this,
            state: 'events'
        });
    };

    //Month selector

    handleChange = date => this.setState({ date });


    render() {
        return (
            <React.Fragment>

                <h2>Availability</h2>
                <h4>Select Month:</h4>
                <DatePicker
                    onChange={this.handleChange}
                    value={this.state.date}
                    maxDetail="year"
                    minDetail="year"
                    dateFormat="DD/MM/YYYY"
                />
                {Object.keys(this.state.events)
                    .filter(key => this.state.events[key].month === this.state.date.getMonth())
                    .map(key => (
                        <Attender
                            key={key}
                            index={key}
                            details={this.state.events[key]}
                            uid={this.props.uid}
                        />
                    )
                    )}
                
            </React.Fragment>
        )
    }
}

export default Availability;

