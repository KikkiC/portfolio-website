import React from 'react'

export const Card = (props) => {
  return <div className="timeline__item">
    <i className={props.icon}></i>
    <span className="timeline__date">{props.year}</span>
    <h3 className="timeline__title">{props.title}</h3>
    <p className="timeline__text" id="description">{props.desc}</p>
    <p className="timeline__skill">{props.skill}</p>
  </div>
}
