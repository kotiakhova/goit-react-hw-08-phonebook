import axios from "axios";
import phonebookActions from "./phonebookActions";

const addItem = (name, number) => (dispatch) => {
  dispatch(phonebookActions.addItemRequest());
  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(phonebookActions.addItemSuccess(data)))
    .catch((error) => {
      dispatch(phonebookActions.addItemError(error));
    });
};

const fetchItems = () => (dispatch) => {
  dispatch(phonebookActions.fetchItemsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(phonebookActions.fetchItemsSuccess(data)))
    .catch((error) => dispatch(phonebookActions.fetchItemsError(error)));
};

const removeItem = (id) => (dispatch) => {
  dispatch(phonebookActions.deleteItemRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phonebookActions.deleteItemSuccess(id)))
    .catch((error) => dispatch(phonebookActions.deleteItemError(error)));
};

export default {
  addItem,
  fetchItems,
  removeItem,
};
