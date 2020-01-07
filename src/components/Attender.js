import React from 'react';


class Attender extends React.Component {
    render() { 
        const { date, image, location, name, time } = this.props.details;
        return (
            <React.Fragment>
                <div className = "availWrap">
                    <div className="availtoprow">
                        <div className="detailsWrap">
                            <p>{name}</p>
                            <p>{time} {date}</p>
                            <p>{location}</p>
                        </div>
                        <img className="imgBox" src={image} alt="Football training" width="80" height ="80" />
                    </div>
                    <div className="availbotrow">
                        <button className="attendbox">Attending</button>
                        <button className="nattendbox greyed">Not Attending</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }   
}

export default Attender;