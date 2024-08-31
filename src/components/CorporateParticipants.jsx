import React from 'react';
import "../styles/corporate-participants.css";

const CorporateParticipants = ({data}) => {
  return (
    <div className='corporate-participants-wrapper'>
      <header className="title-header">Corporate participants</header>
      <div className="corporate-participants-inner-wrapper">
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

export default CorporateParticipants