import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { Contact } from './Contact';
import EditContactForm from './EditContactForm';
import Modal from './Modal';
uuidv4();

 export const LocalStorageContactWrapper = () => {

    const [contacts, setContacts] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState('');


    useEffect(()=>{
        const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        setContacts(savedContacts)
        }, [])


    const addContact = (newContact)=>{
        const localContact = [...contacts, newContact];
        setContacts(localContact);
        localStorage.setItem('contacts', JSON.stringify(localContact));
        // console.log(newContact);
    }


    const deleteContact = (id)=>{
     let userChoice = prompt("Are you sure you want to delete this Contact?(Y/N)");
        if(userChoice==='Y' || userChoice==='y'){
            const localContact = contacts.filter((contact)=>contact.id!==id)
            setContacts(localContact);
            localStorage.setItem('contacts', JSON.stringify(localContact));
        }
        else if(userChoice ==='N' || userChoice==='n'){
            const localContact = contacts;
            setContacts(localContact);
            localStorage.setItem('contacts', JSON.stringify(localContact));
        }
        
    }

    const toggleEditState = (id)=>{
        setContacts(
            contacts.map((contact)=>
                contact.id === id ? {...contact, isEditing: !contact.isEditing}: contact)
        )
        console.log(contacts);
    }

    const toggleFavourite = (id)=>{
        const localContact = contacts.map((contact)=>contact.id===id? {...contact, favourite:!contact.favourite}:contact);
        setContacts(localContact);
        localStorage.setItem('contacts',JSON.stringify(localContact));
    }

    const editContact = (fullName, mobile, email, id)=>{
        const localContact = contacts.map((contact)=>contact.id === id ? {...contact , fullName:[fullName], mobile:[mobile], email:[email], isEditing: !contact.isEditing}: contact);
        setContacts(localContact);
        localStorage.setItem('contacts',JSON.stringify(localContact));
    }

  return (
    <div className='container'>
        <div className='contact-wrapper'>
            <h1 className='title'>Contacts App !!</h1>

            <Modal open={openModal} onClose={()=>setOpenModal(false)} addContact={addContact}/>

            <button type='submit' onClick={()=>setOpenModal(true)} className='contact-add-btn'>Add Contact</button>
            <input className='search-contacts' type="text" placeholder='Search Contacts' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>

                {contacts.map((contact)=>{
                    console.log("from contacts.map: "+ contact.fullName +  contact.isEditing);
                    return(
                        contact.isEditing ? <EditContactForm onClose={(contact)=>toggleEditState(contact.id)} contact={contact} editContact={editContact} key={contact.id}/>:
                    <Contact contact={contact} deleteContact={deleteContact} toggleEditState={toggleEditState} toggleFavourite={toggleFavourite} key={contact.id}/>);                
            })       
        }
            
        </div>
    </div>
  )
}

// export default TodoWrapper;

