import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import './App.css';
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ContactDetails from "./components/ContactDetails";
import api from "./api/contacts"
import EditContact from "./components/EditContact";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [searchResults, setSearchResults] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts,response.data]);
  }

  const searchHandler = (key) => {
    setSearchTerm(key);
    let newContactArr = [];
    if (key !==""){
        newContactArr = contacts.filter((contact) => {
          return Object.values(contact).join(" ").toLowerCase().includes(key.toLowerCase());
        });
  }else {
    newContactArr = contacts;
    }
    setSearchResults(newContactArr);
  }

  const removeContact = async(id) => {
    await api.delete(`/contacts/${id}`)
    const newContactArr = contacts.filter((contact) => contact.id != id);
    setContacts(newContactArr);
  }

  // Retrieve contact
  const retrieveContacts = async() => {
    //                        localhost/3006/contacts me data h
    const response = await api.get("/contacts");
    return response.data;
  }

  const updateContactHandler = async(contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact;
      })
    )

  }


  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) {
    //   setContacts(retrieveContacts);
    // } 
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/contact/:id" component={ContactDetails} />
          <Route path="/" exact render={(props) => (
            <ContactList {...props} contacts={searchTerm.length<1?contacts:searchResults} getContactId={removeContact} term={searchTerm} searchKeyWord={searchHandler}/>
        )} />
          <Route path="/add"  render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )} />
          <Route path="/edit"  render={(props) => (
            <EditContact {...props} updateContactHandler={updateContactHandler}/>
          )} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
