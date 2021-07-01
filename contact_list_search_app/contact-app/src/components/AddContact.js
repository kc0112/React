import React, { Component } from 'react'
export default class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "") {
            alert("All fields are mandatory");
        }
        else {
            this.props.addContactHandler(this.state);
            this.setState({email:"",name:""})
            this.props.history.push("/");
        }

        // let contactsArr = [];
        // contactsArr.push({ name:this.state.name, email:this.state.email });
    }
    render() {
        return (
            
            <div className="jumbotron" style={{ textAlign: "center" }}>
                <br/>
                <h2 > Add Contact </h2>
                <div className="container">
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                                <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} className="form-control" placeholder="Enter Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}  placeholder="Enter email"></input>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" style={{marginRight:"10px"}}>Add</button>
  
                        {/* <button type="submit" className="btn btn-primary" ><Link style={{color:"white", textDecoration:"none"}} to="/" >Go to Contact List</Link></button> */}
                </form>

                </div>
           
            </div>
        )
    }
}
