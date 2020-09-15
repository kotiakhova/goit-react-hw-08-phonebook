import { createAction } from "@reduxjs/toolkit";

const addItemRequest = createAction("phonebook/addRequest");
const addItemSuccess = createAction("phonebook/addSuccess");
const addItemError = createAction("phonebook/addError");

const deleteItem = createAction("phonebook/remove");

const deleteItemRequest = createAction("phonebook/deleteRequest");
const deleteItemSuccess = createAction("phonebook/deleteSuccess");
const deleteItemError = createAction("phonebook/deleteError");

const filterItem = createAction("phonebook/filter");

const fetchItemsRequest = createAction("phonebook/fetchRequest");
const fetchItemsSuccess = createAction("phonebook/fetchSuccess");
const fetchItemsError = createAction("phonebook/fetchError");

export default {
  deleteItem,
  filterItem,

  addItemRequest,
  addItemSuccess,
  addItemError,

  deleteItemRequest,
  deleteItemSuccess,
  deleteItemError,

  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsError,
};
