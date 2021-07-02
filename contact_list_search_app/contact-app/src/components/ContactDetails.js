import React from 'react'
import { Link } from "react-router-dom";

function ContactDetails(props) {
    const { name, email } = props.location.state.contact;
    return (
     
        <div className="jumbotron" style={{display:"flex",justifyContent:"center"}}>

            <div class="card" style={{ width: "18rem",textAlign:"center"}}>
                <img class="card-img-top" src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" alt="Card image cap"></img>
                <ul class="list-group list-group-flush" >
                    <li class="list-group-item">{name}</li>
                    <li class="list-group-item">{email}</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-info"><Link style={{color:"white", textDecoration:"none"}} to="/" >Back to Contact List</Link></button> 
                </div>
            </div>
        </div>
         
    )
}

export default ContactDetails
