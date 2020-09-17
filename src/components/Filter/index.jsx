import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import phonebookSelectors from "../../redux/phonebook/contacts-selectors";

const styles = {
  filter: {
    marginBottom: 25,
  },
};

function Filter({ filterItems }) {
  return (
    <>
      <div style={styles.filter}>
        <p>Find contacts by name</p>
        <input
          name="filter"
          type="text"
          onChange={(e) => filterItems(e.currentTarget.value)}
        />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    filter: phonebookSelectors.getFilter(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  filterItems: (filter) => dispatch(phonebookActions.filterItem(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
