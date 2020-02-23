import React from 'react';
import Attender from './Attender';
import AddEventForm from './AddEventForm';
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
        
    //Test month selector

    handleChange = date => this.setState({ date });

    //MMYY string
    //this.setState( [`${date.getMonth()}${date.getYear()}`]

    // Add Event state

    addEvent = event => {
        // 1. Take a copy of the existing state
        const events = { ...this.state.events };
        // 2. Add our new event to that events variable
        events[`event${Date.now()}`] = event;
        // 3. Set the new events object to state
        this.setState({ events });
        };
    
    
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
                {/* Filter based on selected month and display all events */}
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
                <AddEventForm addEvent={this.addEvent}/>
            </React.Fragment>
        )
    }   
}

export default Availability;

