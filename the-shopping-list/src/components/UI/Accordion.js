import classes from "./Accordion.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import ProductList from "../products/ProductList";
import {
  updateCategoriesThunk,
  getCategoriesThunk
} from "../../components/../store/slices/thunks";

let isLoaded = true;

const Accordion = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [id, setId] = useState(null);

  const togglePanel = (e, idItem) => {
    e.stopPropagation();
    if (idItem) {
      setIsClicked((prev) => !prev);
      setId(idItem);
    } else {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    setIsClicked(true);
  }, [id]);

  useEffect(() => {
    if (isLoaded) {
      isLoaded = false;
      return;
    }
    dispatch(updateCategoriesThunk(categories));
  }, [categories, dispatch]);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  return (
    <>
      {categories.map((category) => (
        <section key={category.id}>
          <button
            onClick={(e) => togglePanel(e, category.id)}
            className={classes["accordion"]}
          >
            {category.cat}
          </button>
          <div
            onClick={togglePanel}
            className={`${classes["panel"]} ${
              id === category.id && (isClicked ? classes["displayPanel"] : "")
            }`}
          >
            <ProductList
              products={category.products}
              cat={category.cat}
              id={category.id}
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default Accordion;
