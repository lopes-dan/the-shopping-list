import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      {
        id: "dasda",
        cat: "Vegetables",
        products: []
      },
      { id: "lpewd", cat: "Fruits", products: [] },
      { id: "wqwod", cat: "Meat", products: [] },
      { id: "fewfj", cat: "Grains", products: [] },
      { id: "tewew", cat: "Dairy", products: [] },
      { id: "lddas", cat: "Kitchen Stuff", products: [] },
      { id: "fsdfs", cat: "Bathroom Stuff", products: [] },
      { id: "dsacs", cat: "Hygiene Stuff", products: [] },

      { id: "rewjg", cat: "Beverages", products: [] },
      { id: "ewfgs", cat: "Others", products: [] }
    ],
    isEditing: false
  },
  reducers: {
    addProduct(state, action) {
      const desiredCat = state.categories.find(
        (product) => product.id === action.payload.id
      );

      desiredCat.products.push(action.payload.product);
      const set = new Set(desiredCat.products);
      const arraySet = [...set];
      desiredCat.products = arraySet;
    },
    removeProduct(state, action) {
      let arr = state.categories;

      arr.map((row) => {
        if (row.products.length) {
          return row.products.map((item, i, arr) => {
            if (item === action.payload) {
              arr.splice(i, 1);
            }
            return item;
          });
        } else {
          row.products = [];
        }
      });
    },

    setisEditing(state, action) {
      state.isEditing = !state.isEditing;
    },

    fetchMeals(state, action) {
      state.categories = action.payload;
    },
    filterMeals(state, action) {
      const newList = state.meals.filter((meal) => {
        return meal.name === action.payload;
      });
    }
  }
});

export default categorySlice;

export const categoryActions = categorySlice.actions;
