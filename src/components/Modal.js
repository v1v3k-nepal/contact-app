import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
uuidv4();

const Modal = (props) => {

  const [fullName,setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e)=>{
      e.preventDefault();
      const newContact = {fullName, mobile, email, id:uuidv4(), favourite: false, isEditing: false};
      props.addContact(newContact)
      props.onClose();     
  }


     if(props.open) return (
        <div className='modal-container'>            
            <form onSubmit={handleSubmit}>               
               <label htmlFor="name">Name</label>
               <input type="text" placeholder='Full Name' name='fullName' value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
               <label htmlFor="phone">Mobile</label>
               <input type="text" placeholder='Phone Number' name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
               <label htmlFor="email">Email</label>
               <input type="text" placeholder='Email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
               <button className='modal-close-btn' onClick={props.onClose}>Close</button>
               <button className='modal-submit-btn' type='submit'>Submit</button>
            </form>
        </div>
  )

     }

export default Modal;
