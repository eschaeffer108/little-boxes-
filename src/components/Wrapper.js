import React from 'react';
import Picture from './Picture';
import Numbers from './Numbers';
import List from './List';

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <Numbers
      header ='Todays Date and Random Number:'
      />
      <Picture
      header='Ronnie James Dio!'
      url='https://i.pinimg.com/736x/30/de/f1/30def1de1a3940e1ed09495ee41f5c8c--james-dio-music-humor.jpg'
      />
    </div>
  )
}

export default Wrapper;
