import React from 'react';
import Wrapper from './Wrapper'

const Box = props => {
  let boxClass = `box ${props.boxClass}`

  let paragraph
  if (props.paragraph) {
    paragraph = <p>{props.paragraph}</p>
  }

  let list
  if (props.list) {
    list = <ul>{props.list}</ul>
  }

  let img
  if (props.url) {
    img = <img alt="I dont know what this does but the page breaks if I delete it" src={props.url}/>
  }

  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      {paragraph}
      <Wrapper/>
    </div>
  )
}

export default Box;
