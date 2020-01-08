import React from 'react';
import eventitems from '../sample-event.js';
import Attender from './Attender';
import NavBar from './NavBar.js';


class Availability extends React.Component {

    // // create state
    constructor(props) {
        super(props);
        this.state = {
            month: 'Jan',
            events: {},     
    };
    
        this.handleChange = this.handleChange.bind(this);
        
}


    // sample events for development
    loadSampleEvents = () => {
        this.setState({ events: eventitems });
    };
    // load sample events
   componentDidMount() {
        this.loadSampleEvents()
    } ;

    //Test month selector

    handleChange(event) {
        this.setState({month: event.target.value});
    }
    
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
                {Object.keys(this.state.events)
                
                .map(key => (
                    <Attender
                        key={key}
                        index={key}
                        details={this.state.events[key]}
                    />
                ))
               
                }
                
            </React.Fragment>
        )
    }   
}

export default Availability;

