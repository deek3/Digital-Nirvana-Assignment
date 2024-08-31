import React from 'react';
import "../styles/conference-participants.css"

const ConferenceParticipants = ({data}) => {
  return (
    <div className='conference-participants-wrapper'>
      <header className="title-header">Conference participants</header>
      <div className="conference-participants-inner-wrapper">
        {data.map( (each) => (
          <div className="each-item">
            <div className="header">
              <div className="participant-name">{each?.name}</div>
              <span className="designation-company">{ each?.designation && each?.company ? `${each.designation} | ${each?.company}` : (each?.designation || each?.company)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConferenceParticipants