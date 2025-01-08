import { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./styles.css";
import { baseURL } from ".";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactForm fetchContacts={fetchContacts} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
