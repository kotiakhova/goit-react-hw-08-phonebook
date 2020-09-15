import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./phonebookActions";

const contacts = {
  items: [],
  filter: "",
};

const addItem = (state, action) => {
  return { ...state, items: [...state.items, action.payload] };
};
const deleteItem = (state, action) => {
  return {
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  };
};

const filterItem = (state, action) => {
  return {
    ...state,
    filter: action.payload,
  };
};
const fetchItems = (state, action) => {
  return { items: action.payload, filter: "" };
};
const phonebookReducer = createReducer(contacts, {
  [phonebookActions.addItemSuccess]: addItem,
  [phonebookActions.deleteItemSuccess]: deleteItem,
  [phonebookActions.filterItem]: filterItem,
  [phonebookActions.fetchItemsSuccess]: fetchItems,
});

export default phonebookReducer;
