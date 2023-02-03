import React from 'react'
import Card from './Card';

const Detail = () => {
  return (
    <div>
      <div className='box1'>
        <li className='info' id="c-name">Hellomet
        </li>
        <li className='info1' id='c-contact'>
          CONTACT
          <p className='pertic-info' id='person-name1'>Swapnil Warng</p>
        </li>
        <li className='info1' id='c-city'>CITY
          <p className='pertic-info' id='city-name1'>Mumbai</p>

        </li>
        <li className='info1' id='c-state'>STATE
          <p className='pertic-info' id='state-name1'>Maharashtra</p>
        </li>
        <button className='info1' id='btn-1'>Hide Detail</button>
      </div>
      <li>
        Description
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab velit corporis tempore eius aut tenetur eaque deleniti! Deleniti sit, perferendis quibusdam, similique et deserunt distinctio quidem necessitatibus quos recusandae ad doloremque!</p>
      </li>
      <li>
        Contact Person
        <p>
          Swapnil Warng
        </p>
      </li>
      <li>
        Address
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, odit.
        </p>
      </li>
      <li>
        Designation
        <p>
          Proprietor
        </p>
      </li>
      <li>
        City
        <p>
          Mumbai
        </p>
      </li>
      <li>
        Emails
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </li>
      <li>
        State
        <p>
          Maharashtra
        </p>
      </li>
      <li>
        Phones
        <p>
          7517854597
        </p>
      </li>
      <li>
        Country
        <p>
          India
        </p>
      </li>

    </div>
  )
}

export default Detail;