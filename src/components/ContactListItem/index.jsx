import React from "react";
import style from "./ContactListItem.module.css";
import { connect } from "react-redux";
import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import phonebookSelectors from "../../redux/phonebook/contacts-selectors";

function ContactListItem({ name, number, removeItem }) {
  return (
    <>
      <li className={style.container}>
        <p className={style.name}>{name}</p>
        <div className={style.smallContainer}>
          <p className={style.number}>{number}</p>
          <button
            type="button"
            onClick={removeItem}
            className={style.removeBtn}
          ></button>
        </div>
      </li>
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  return phonebookSelectors.getItemById(state, ownProps.id);
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(phonebookOperations.removeItem(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
