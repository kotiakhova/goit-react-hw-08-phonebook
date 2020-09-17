import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import ContactForm from "../../components/ContactForm";
import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import phonebookSelectors from "../../redux/phonebook/contacts-selectors";
import { CSSTransition } from "react-transition-group";
import { authSelectors } from "../../redux/auth";

class ContactsPage extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/login");
      return;
    }
    this.props.onFetchItems();
  }
  componentDidUpdate() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/login");
      return;
    }
  }

  render() {
    const { contacts } = this.props;
    return (
      <>
        <ContactForm />
        <h2>Contacts</h2>
        <CSSTransition
          in={contacts.length > 1 ? true : false}
          appear={true}
          classNames="filter"
          timeout={500}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <ContactList />
        {/* {this.props.isLoadingTasks && <h1>Doing HTTP stuff...</h1>} */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: phonebookSelectors.getItem(state),
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};
const mapDispatchToProps = {
  onFetchItems: phonebookOperations.fetchItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
