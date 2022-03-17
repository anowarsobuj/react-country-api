import React from 'react'
import './content.css'
const Card = (props) => {
  return(
    <div className='card'>
       <h2>Name : {props.country.name.common}</h2>
       <img src={props.country.flags.svg} alt=""/>
    </div>
  )
}

export default Card;