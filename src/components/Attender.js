//if yes, greyed on red, if no, greyed on green. greyed should make it not selectable
//if doesnt exist, create username, allow both buttons to be pressed

//create button press for each, updates database and greys correctly

import React from 'react';
import base from '../base';

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
    let attenddis = true
    let nattenddis = true
    if (this.state.attendance.attending === "no") {attend += ' greyed'; attenddis = false}
    let nattend = "nattendbox"
    if (this.state.attendance.attending === "yes") {nattend += ' greyed'; nattenddis = false}
    
    const {
      date,
      image,
      location,
      name,
      starttime,
      endtime,
      description,
    } = this.props.details;

    let setAttend = () => { base.post(`BadgerSett/events/${this.props.index}/attendance/${this.props.uid}`, {
      data: {attending: 'yes'}
    }
    )}  

    let setNattend = () => { base.post(`BadgerSett/events/${this.props.index}/attendance/${this.props.uid}`, {
      data: {attending: 'no'}
    }
    )}  




    return (
      <React.Fragment>
        <div className="availWrap">
          <div className="availtoprow">
            <div className="detailsWrap">
              <strong>{name}</strong>
              <p>
                {starttime}-{endtime} {date}
              </p>
              <p>{location}</p>
              <p>{description}</p>
            </div>
            <img
              className="imgBox"
              src={image}
              alt="Football training"
              width="80"
              height="80"
            />
          </div>
          <div className="availbotrow">
            <button onClick={setAttend} disabled ={attenddis} className={attend} >Attending</button>
            <button onClick={setNattend} disabled ={nattenddis} className={nattend}>Not Attending</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Attender;
