import React from 'react';
import List from './List';


let theList = <ul>
  <li>Asteroids</li>
  <li>Comets</li>
  <li>Moon</li>
  <li>Planets</li>
  <li>Stars</li>
  <li>Sun</li>
</ul>

const Picture = props => {
  return (
    <div className='box picture'>
      <h1>{props.header}</h1>
      <img alt="I dont know what this does but the page breaks if I delete it" src={props.url}/>
      <List
      header='This is a list:'
      listB ={theList}
      />
    </div>
  )
}

export default Picture;
