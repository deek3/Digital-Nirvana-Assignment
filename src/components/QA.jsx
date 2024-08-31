import React from 'react';
import '../styles/qa.css';

const QA = ({data}) => {

  return (
    <div className='qa-wrapper'>
      <header className="title-header">Questions and Answers</header>
      <div className="qa-inner-wrapper">
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

export default QA