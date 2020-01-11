import React from 'react';
import eventitems from '../sample-event.js';
import Attender from './Attender';
import NavBar from './NavBar.js';
import AddEventForm from './AddEventForm';


class Availability extends React.Component {

    // create state
    constructor(props) {
        super(props);
        this.state = {
            //set this to current month
            month: 'Jan',
            events: {},  
            users: {},   
        };
        this.handleChange = this.handleChange.bind(this);
        
}

    // sample events for development
    loadSampleEvents = () => {
        this.setState({ events: eventitems });
    };


    // load sample events
   componentDidMount() {
        this.loadSampleEvents();
    } ;

    //Test month selector

    handleChange(event) {
        this.setState({month: event.target.value});
    }

    // Add Event state

    addEvent = event => {
        // 1. Take a copy of the existing state
        const events = { ...this.state.events };
        // 2. Add our new fish to that fishes variable
        events[`event${Date.now()}`] = event;
        // 3. Set the new fishes object to state
        this.setState({ events });
        };
    
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <h2>Availability</h2>
                <select value={this.state.month} onChange={this.handleChange}>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                </select>
                {/* Filter based on selected month and display all events */}
                {Object.keys(this.state.events)
                .filter(key => this.state.events[key].month === this.state.month)
                .map(key => (
                    <Attender
                        key={key}
                        index={key}
                        details={this.state.events[key]}
                    />
                    )
                )}
                <AddEventForm addEvent={this.addEvent}/>
            </React.Fragment>
        )
    }   
}

export default Availability;

