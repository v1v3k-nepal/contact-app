import { faCheckCircle, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Contact = (props) => {
    
  return ( 
      <div className={`${props.contact.favourite? 'favourite': 'contact'}`}>
        <div onClick={()=>{props.toggleFavourite(props.contact.id)}}>
          <p>{props.contact.fullName}</p>
          <p>{props.contact.mobile}</p>
          <p>{props.contact.email}</p>
          <p>{props.contact.address}</p>
        </div>

          <div className='icons'>
              <FontAwesomeIcon icon={faCheckCircle} className={`${props.contact.favourite? '':'hide-checked-icon'}`}/>
              <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{props.toggleEditState(props.contact.id)}}/>
              <FontAwesomeIcon icon={faTrash} onClick={()=>{props.deleteContact(props.contact.id)}}/>
          </div>
      </div>
  )
}

// className={`${contact.favourite? 'favourite': 'contact'}`}
// onClick={()=>{toggleFavourite(contact.id)}}
