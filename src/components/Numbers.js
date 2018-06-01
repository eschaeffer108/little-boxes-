import React from 'react';

const Numbers = props => {
  let date = (new Date).toString()
  let random = parseInt(Math.random() * 100)
  return (
    <div className='box numbers'>
      <h1>{props.header}</h1>
      <p>
        Todays date is
        <strong>&nbsp;{date}&nbsp;</strong>
        and
        <em>&nbsp;{random}&nbsp;</em>
        is a random number.
      </p>
    </div>
  )
}

export default Numbers;
