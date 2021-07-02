import React, { useRef } from 'react';
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

function ContactList(props) {
    const inputEl = useRef("")

    const deleteContactHandler = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this contact",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                props.getContactId(id);
              swal("Poof! Contact has been deleted!", {
                icon: "success",
              });
            }
          });
    };

    const getSearchTerm = (e) => {
        props.searchKeyWord(inputEl.current.value)
    }
    
    return (
        <>
            
            <h2>Contact List</h2>
            <div >
                <div className='jumbotron' >
                    <div className="row "> 
                        <div className="col-12">
                            <input type="text" ref={inputEl} className="form-control" placeholder="Search Contacts" value={props.term} onChange={getSearchTerm} />
                            <i className="fas fa-search" style={{ position: 'absolute', right: '2rem', bottom: '0.7rem', zIndex: '1' }}></i>
                        </div>
                    </div>
                    <br/>
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
