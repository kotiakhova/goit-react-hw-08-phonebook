import React from "react";
import { connect } from "react-redux";
import ContactListItem from "../ContactListItem";
import phonebookSelectors from "../../redux/phonebook/contacts-selectors";
import { authSelectors } from "../../redux/auth";

function ContactList({ contacts }) {
  return (
    <>
      <ul>
        {contacts.map(({ id }) => (
          <ContactListItem id={id} key={id} />
        ))}
      </ul>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: authSelectors.isAuthenticated(state)
      ? phonebookSelectors.getFilteredItems(state)
      : [],
  };
};

export default connect(mapStateToProps)(ContactList);
