import React from 'react';
import Base from '../base';
import EventAttendance from './EventAttendance';


// 1. Select a session from firebase generated list

// 2. Selected session loads (new component) list of all players with accept/decline/no response data

// 3. Each player has a dropdown menu where position for that session can be assigned, updates firebase


class Selection extends React.Component {

    state = {
        selectedSession: "None",
        events: {}
    }


    getEvents() {
        Base.fetch('BadgerSett/events', {
            context: this,
            then(events) {
                this.setState({ events });
            }
        });
    }

    componentDidMount = () => {
        this.getEvents()
    }

    handleChange = event => this.setState({ selectedSession: event.target.value });


    render() {
        return (
            <section>
                <h1>Selection</h1>
                <br />
                <select value={this.state.selectedSession} onChange={this.handleChange}>
                    <option defaultValue="selected">Select a session</option>
                    {Object.keys(this.state.events)
                        .map(key => (

                            <option key={key} value={key}>{this.state.events[key].date}-{this.state.events[key].name}</option>
                        )
                        )
                    }
                </select>
                <EventAttendance selectedSession={this.state.selectedSession} selectedPlayer />
            </section>

        )
    }
}


export default Selection;




