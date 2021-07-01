import React from 'react'
import { Link } from "react-router-dom";
function ContactCard(props) {
    let { id, name, email } = props.contact;
    

    
    return (
    
            <ul className="list-group" id="contact-list">
                <li className="list-group-item" >
                <div className="row">
                        <div className="col-2">
                            <img className="avatar avatar-64 bg-light rounded-circle text-white p-2"
                            src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"></img>
                        </div>
                        <div className="col-8">
                            <Link style={{color:"black", textDecoration:"none"}} to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
                            {name}<br />{email}    
                            </Link>
                        </div>
                    <div className="col-2" style={{display:"flex",justifyContent:"flex-end",alignItems:"center" }}>
                        <div className="col-1">
                            <i className="fas fa-trash-alt" style={{ color: "red", marginTop: "10px"}} onClick={() => props.clickHandler(id)}></i>
                        </div>

                        <div className="col-1">
                            <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                                <i class="fas fa-edit" style={{ marginTop: "10px"}} ></i>
                            </Link>
                        </div>
                        
                        </div>
                    </div>
                </li>
            </ul>
        
    )
}

export default ContactCard
