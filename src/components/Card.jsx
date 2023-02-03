import React, {useState} from 'react'
// import "../App.css";
import {Link, useNavigation } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

const Card = () => {
  // let Navigate = useNavigation();
  
  return (
    <div className='box1'>
        <li className='info' id="c-name">Hellomet
        </li>
        <li className='info1'id='c-contact'>
            CONTACT
          <p className='pertic-info' id='person-name1'>Swapnil Warng</p>
        </li>
        <li className='info1' id='c-city'>CITY
          <p className='pertic-info' id='city-name1'>Mumbai</p>

        </li>
        <li className='info1'id='c-state'>STATE
          <p className='pertic-info' id='state-name1'>Maharashtra</p>
        </li>
          <button className='info1' id='btn-1' onClick={() => navigator('./Detail.jsx')}>View Detail</button>
        
        
        
    </div>
  )
}


export default Card;