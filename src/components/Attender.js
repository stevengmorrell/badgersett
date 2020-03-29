//if yes, greyed on red, if no, greyed on green. greyed should make it not selectable
//if doesnt exist, create username, allow both buttons to be pressed

//create button press for each, updates database and greys correctly

import React from 'react';
import base from '../base';
import { Link } from 'react-router-dom';

class Attender extends React.Component {

  // create state
  constructor(props) {
    super(props);
    this.state = {
      attendance: {}
    };

  }

  componentDidMount() {
    this.ref = base.syncState(`BadgerSett/events/${this.props.index}/attendance/${this.props.uid}`, {
      context: this,
      state: 'attendance'
    });
  };





  render() {
    let attend = "attendbox"
    let attenddis = false
    let nattenddis = false
    if (this.state.attendance.attending === "no") { attend += ' greyed'; nattenddis = true }
    let nattend = "nattendbox"
    if (this.state.attendance.attending === "yes") { nattend += ' greyed'; attenddis = true }

    const {
      date,
      location,
      name,
      starttime,
      endtime,
      description,
    } = this.props.details;

    let setAttend = (e) => {
      e.preventDefault();
      base.post(`BadgerSett/events/${this.props.index}/attendance/${this.props.uid}`, {
        data: { attending: 'yes' }
      }
      )
    }

    let setNattend = (e) => {
      e.preventDefault();
      base.post(`BadgerSett/events/${this.props.index}/attendance/${this.props.uid}`, {
        data: { attending: 'no' }
      }
      )
    }




    return (
      <article>
        <header className="attendance">
          <h2>{name}</h2>
          <time>
            {starttime}-{endtime} {date}
          </time>
          <p><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"></path></svg>{location}</p>
          <p className="who">{description}</p>
          <div className="attendance">
            <Link to="/" onClick={setAttend} disabled={attenddis} className={attend} >Attending</Link>
            <Link to="/" onClick={setNattend} disabled={nattenddis} className={nattend}>Not Attending</Link>
          </div>
        </header>
      </article>
    );
  }
}

export default Attender;
