import React from 'react';
import DatePicker from 'react-date-picker';
import base from '../base';

class AddEventForm extends React.Component {

    dateRef = React.createRef();
    descriptionRef = React.createRef();
    endtimeRef = React.createRef();
    starttimeRef = React.createRef();
    // imageRef = React.createRef();
    locationRef = React.createRef();
    //monthRef = React.createRef();
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
    }

    onChange = date => this.setState({ date })

    createEvent = e => {
        //1. Stop form from submitting
        e.preventDefault();
        const NEWEVENT = {
            date: this.state.date.toLocaleDateString(),
            month: this.state.date.getMonth(),
            description: this.descriptionRef.current.value,
            endtime: this.endtimeRef.current.value,
            starttime: this.starttimeRef.current.value,
            // image: this.imageRef.current.value,
            location: this.locationRef.current.value,
            //month: this.monthRef.current.value,
            name: this.nameRef.current.value,

        };
        this.addEvent(NEWEVENT);
        console.log(NEWEVENT);
        //Refresh the form
        e.currentTarget.reset();
    }


    render() {
        return (
            <React.Fragment>
                <h3>Add Event</h3>
                <form className="event-edit" onSubmit={this.createEvent}>
                    
                    <DatePicker
                        onChange={this.onChange}
                        value={this.state.date}
                        minDetail="month"
                        ref={this.dateRef}
                    />
                    <input name="name" type="text" placeholder="Name" ref={this.nameRef} />
                    {//} <input name="month" type="text" placeholder="Month" ref={this.monthRef} />
                    }
                    {//<input name="date" type="text" placeholder="Date" ref={this.dateRef} />
                    }
                    <input name="starttime" type="text" placeholder="Start time" ref={this.starttimeRef} />
                    <input name="endtime" type="text" placeholder="End time" ref={this.endtimeRef} />
                    <textarea name="description" placeholder="Description" ref={this.descriptionRef} />
                    <select name="location" type="text" placeholder="Location" ref={this.locationRef} >
                        <option value="Forest Recreation Ground">Forest Recreation Ground</option>
                        <option value="Other">Other</option>
                    </select>
                    {/* <input name="image" type="text" placeholder="Image" ref={this.imageRef} /> */}
                    <button type="submit"> + Add Event</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddEventForm;