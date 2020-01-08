import React from 'react';


class Attender extends React.Component {
    render() { 
        const { date, image, location, name, starttime, endtime, description } = this.props.details;
        return (
            <React.Fragment>
                <div className = "availWrap">
                    <div className="availtoprow">
                        <div className="detailsWrap">
                            <strong>{name}</strong>
                            <p>{starttime}-{endtime} {date}</p>
                            <p>{location}</p>
                            <p>{description}</p>
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