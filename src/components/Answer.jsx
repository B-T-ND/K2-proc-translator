import React from 'react'
import "../css/Answer.css";

const Answer = () => {
  return (
    <div className='answer-panel'>
      <div className="answer-panel-heading">
        <span className='strong'>Searchword: </span>
        <span>{" { phonetics }"}</span>
      </div>
      <div className="answer-panel-translation">
        <span className='strong'>Translation: </span>
        <span>more context</span>
      </div>

    </div>
  )
}

export default Answer