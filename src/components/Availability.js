import React from 'react';
import eventitems from '../sample-event.js';
import NavBar from './NavBar';
import Attender from './Attender';


class Availability extends React.Component {

    state = { events: {}
    };

    loadSampleEvents = () => {
        this.setState({ events: eventitems });
    };

   componentDidMount() {
        this.loadSampleEvents()
    } ;
      
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <h2>Availability</h2>

                {Object.keys(this.state.events).map(key => (
                    <Attender
                        key={key}
                        index={key}
                        details={this.state.events[key]}
                    />
                ))}



                
                {/* <Attender 
                    events={this.state.events}
                /> */}
            </React.Fragment>
        )
    }   
}

export default Availability;

