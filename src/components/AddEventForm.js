import React from 'react';
import DatePicker from 'react-date-picker';
import base from '../base';
import TimePicker from 'react-time-picker';

class AddEventForm extends React.Component {

    dateRef = React.createRef();
    descriptionRef = React.createRef();
    //endtimeRef = React.createRef();
    // starttimeRef = React.createRef();
     locationRef = React.createRef();
    nameRef = React.createRef();

    componentDidMount() {
        this.ref = base.syncState('BadgerSett/events', {
            context: this,
            state: 'events'
        });
    };

    
    addEvent = event => {
        // 1. Take a copy of the existing state
        const events = { ...this.state.events };
        // 2. Add our new event to that events variable
        events[`event${Date.now()}`] = event;
        // 3. Set the new events object to state
        this.setState({ events });
    };



    state = {
        date: new Date(),
        startTime: '10:00',
        endTime: '12:30'
    }

    onChange = date => this.setState({ date })

    createEvent = e => {
        //1. Stop form from submitting
        e.preventDefault();
        const NEWEVENT = {
            date: this.state.date.toLocaleDateString(),
            month: this.state.date.getMonth(),
            description: this.descriptionRef.current.value,
            endtime: this.state.endTime,
            starttime: this.state.startTime,
            location: this.locationRef.current.value,
            name: this.nameRef.current.value,

        };
        this.addEvent(NEWEVENT);
        console.log(NEWEVENT);
        //Refresh the form
        e.currentTarget.reset();
    }

    onChangeStart = startTime => this.setState({ startTime })
    onChangeEnd = endTime => this.setState({ endTime })


    render() {
        return (
            <section>
                <h1>Event Management</h1>
                <h3>Add Event</h3>
                <form className="event-edit" onSubmit={this.createEvent}>

                <input name="name" type="text" placeholder="Event Name" ref={this.nameRef} />
                    <DatePicker
                        onChange={this.onChange}
                        value={this.state.date}
                        minDetail="month"
                        ref={this.dateRef}
                    />
                    <TimePicker 
                        onChange={this.onChangeStart}
                        value={this.state.startTime}
                        disableClock = {true}
                        maxDetail = {"minute"}
                    />
                    <TimePicker 
                        onChange={this.onChangeEnd}
                        value={this.state.endTime}
                        disableClock = {true}
                        maxDetail = {"minute"}
                    />
                   
                    <input name="description" type="text" placeholder="Description" ref={this.descriptionRef} />
                    <input name="location" type="text" placeholder="Location" ref={this.locationRef} />
                    
                    <button type="submit"> + Add Event</button>
                </form>
            </section>
        )
    }
}

export default AddEventForm;