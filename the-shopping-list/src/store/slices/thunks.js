import categorySlice from "./categorySlice";

export const updateCategoriesThunk = (categories) => {
  return async () => {
    const updateItems = async () => {
        const response = await fetch(
            "https://items-8ee46-default-rtdb.firebaseio.com/items.json",
            {
              method: "PUT",
              body: JSON.stringify(categories || [])
            }
          );
      if (!response.ok) {
        throw new Error("Sending cat data");
      }
      return response.json();
    };
    try {
      await updateItems();
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCategoriesThunk = () => {
  return async (dispatch) => {
    const getMeals = async () => {
      const response = await fetch(
        "https://items-8ee46-default-rtdb.firebaseio.com/items.json"
      );

      if (!response.ok) {
        throw new Error("failed");
      }
      const meals = response.json();

      return meals;
    };
    try {
      const categories = await getMeals();

      const mealsProduct = categories.map((row) => {
        if (!row.products) {
          row.products = [];
        }
        return row;
      });
      dispatch(categorySlice.actions.fetchMeals(mealsProduct || []));
    } catch (err) {
      console.log(err);
    }
  };
};
