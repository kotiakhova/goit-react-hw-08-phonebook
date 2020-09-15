import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import ContactForm from "../../components/ContactForm";
import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import phonebookSelectors from "../../redux/phonebook/contacts-selectors";
import { CSSTransition } from "react-transition-group";

class ContactsPage extends Component {
  componentDidMount() {
    this.props.onFetchItems();
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

// const mapStateToProps = (state) => ({
//   isLoadingTasks: tasksSelectors.getLoading(state),
// });

// const mapDispatchToProps = {
//   onFetchTasks: tasksOperations.fetchTasks,
// };

// export default // connect(mapStateToProps, mapDispatchToProps)(
// ContactsPage;
// // );

const mapStateToProps = (state) => {
  return {
    contacts: phonebookSelectors.getItem(state),
  };
};
const mapDispatchToProps = {
  onFetchItems: phonebookOperations.fetchItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
