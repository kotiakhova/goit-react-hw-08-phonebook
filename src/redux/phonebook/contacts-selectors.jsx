import { createSelector } from "reselect";

const getItem = (state) => state.phonebookReducer.items;
const getFilter = (state) => state.phonebookReducer.filter;

const getItemById = createSelector([(_, id) => id, getItem], (id, items) => {
  const item = items.find((item) => item.id === id);
  return { ...item };
});

const getFilteredItems = createSelector(
  [getItem, getFilter],
  (items, filter) => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getItem,
  getFilter,
  getItemById,
  getFilteredItems,
};
