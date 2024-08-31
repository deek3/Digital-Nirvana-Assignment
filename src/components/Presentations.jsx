import React from 'react'
import "../styles/presentation.css"

const Presentations = ({data}) => {
  return (
    <div className='presentation-wrapper'>
      <header className="title-header">Presentations</header>
      <div className="presentation-inner-wrapper">
        {data.map( (each) => (
          <div className="each-item">
            <div className="header">
              <div className="participant-name">{each?.participant_name}</div>
              <span className="designation-company">{ each?.designation && each?.company ? `${each.designation} | ${each?.company}` : (each?.designation || each?.company)}</span>
            </div>
            {each?.transcript_data?.map( (eachTranscripts, index) => (
              <p key={index} className="description">{eachTranscripts}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Presentations