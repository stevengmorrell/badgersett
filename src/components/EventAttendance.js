import React from 'react';
import Base from '../base';

class EventAttendance extends React.Component {

    state = {
        players: {}
    }


    getPlayers() {
        Base.fetch(`BadgerSett/events/${this.props.selectedSession}/attendance`, {
            context: this,
            then(players) {
                this.setState({ players });
            }
        });
    }

    componentDidUpdate = () => {
        this.getPlayers()
        let attending = this.state.players.filter(function (player) {
            return player.attending === "yes";
            
          });
          console.log(attending)
    }

    


    render() {
        return (
            <React.Fragment>
                <h2>{this.props.selectedSession}</h2>
                <p>Attending</p>
                
                    {Object.keys(this.state.players).map(key => (<p>{key.attending}</p>)
                    )
                    }

                <p>Declined</p>

                <p>No response</p>


            </React.Fragment>
            
        )
    }
}

export default EventAttendance;