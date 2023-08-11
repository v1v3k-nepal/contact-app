import React, { useState } from 'react'

const EditContactForm = (props) => {

    const [fullName,setFullName] = useState(props.contact.fullName);
    const [mobile, setMobile] = useState(props.contact.mobile);
    const [email, setEmail] = useState(props.contact.email);

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.editContact(fullName, mobile, email, props.contact.id);
    }

    // console.log(props.contact);

  if(props.contact.isEditing) return (
    <div className='modal-container'>            
            <form onSubmit={handleSubmit}>               
               <label htmlFor="name">Name</label>
               <input type="text" placeholder='Full Name' name='fullName' value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
               <label htmlFor="phone">Mobile</label>
               <input type="text" placeholder='Phone Number' name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
               <label htmlFor="email">Email</label>
               <input type="email" placeholder='Email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
               {/* <button className='modal-close-btn' onClick={props.onClose}>Close</button> */}
               <button className='modal-update-btn' type='submit'>Update</button>
            </form>
        </div>
  )
}

export default EditContactForm;
