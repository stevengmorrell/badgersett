import React from 'react';
import Base from '../base';

class EventAttendance extends React.Component {

    state = {
        players: {},
        playerNames: {}
    }


    getPlayers() {
        Base.fetch(`BadgerSett/events/${this.props.selectedSession}/attendance`, {
            context: this,
            then(players) {
                this.setState({ players });
            }
        });
    }

    getPlayerNames() {
        Base.fetch("BadgerSett/users", {
            context: this,
            then(playerNames) {
                this.setState({ playerNames });
            }
        });
    }

    componentDidUpdate = () => {
        this.getPlayers();
        
    }

    componentDidMount = () => {
        this.getPlayerNames()
    }

    render() {
        return (
            <React.Fragment>
                <h3>Attending</h3>
                {Object.keys(this.state.players)
                .filter(key => this.state.players[key].attending === "yes")
                .map(key => <p>{this.state.playerNames[key].name} - {this.state.playerNames[key].Pos1}/{this.state.playerNames[key].Pos2}</p>)
                }

                <h3>Declined</h3>

                {Object.keys(this.state.players)
                .filter(key => this.state.players[key].attending === "no")
                .map(key => <p>{this.state.playerNames[key].name} - {this.state.playerNames[key].Pos1}/{this.state.playerNames[key].Pos2}</p>)
                }

            </React.Fragment>

        )
    }
}

export default EventAttendance;

//<p>{this.state.players[key]}</p>

//.filter(key => (key.attending === "yes")).map(<p>SUCCESS</p>)

