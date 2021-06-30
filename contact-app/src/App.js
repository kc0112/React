import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import './App.css';
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ContactDetails from "./components/ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts,{ id:uuid(), ...contact }]);
  }

  const removeContact = (id) => {
    const newContactArr = contacts.filter((contact) => contact.id != id);
    setContacts(newContactArr);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/contact/:id" component={ContactDetails} />
          <Route path="/" exact render={(props) => (
            <ContactList {...props} contacts={contacts} getContactId={removeContact}/>
        )} />
          <Route path="/add"  render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
