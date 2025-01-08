const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <strong>{contact.name}</strong> <br />
            {contact.email} <br />
            {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
