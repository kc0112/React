import React from 'react'
import ContactCard from "./ContactCard"
import {Link} from 'react-router-dom'

function ContactList(props) {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
      };
    return (
        <>
            
            <h2>Contact List</h2>
            <div >
            <div className='jumbotron'>
                
                    {
                        props.contacts.length==0?<h2>No Contacts</h2>:
                        props.contacts.map((contact) => (
                            <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler}/>
                        ))
                    }
            </div>
            <button type="submit" className="btn btn-primary">
                <Link style={{color:"white", textDecoration:"none"}} to='/add'>Add</Link>
            </button>
        </div>
        
            </>
    )
}

export default ContactList
