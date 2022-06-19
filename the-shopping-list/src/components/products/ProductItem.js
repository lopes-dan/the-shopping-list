import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../components/../store/slices/categorySlice";
import { useEffect, useState, useRef } from "react";
import { updateCategoriesThunk } from "../../components/../store/slices/thunks";
import ProductItemContent from "./ProductItemContent";
import ButtonSection from "../../components/UI/ButtonSection";
import { editList } from "./productItemHelper";
import classes from "./ProductItem.module.css";

let isItemRemoved = true;

const ProductItem = ({ product }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [isRemoved, setIsRemoved] = useState(true);
  const [editedText, setEditedText] = useState(product);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const inputRef = useRef();

  const removeItemHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(categoryActions.removeProduct(product));

    if (isItemRemoved) {
      dispatch(categoryActions.removeProduct(product));
    }
  };

  const editItemHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEdited((prev) => !prev);

    if (isEdited) {
      const results = editList(categories, inputRef, product, editedText);
      dispatch(categoryActions.fetchMeals(results));

      dispatch(updateCategoriesThunk(results, isEdited));
    } else {
      return;
    }
  };

  const submitInput = (e) => {
    e.prevenDefault();
    e.stopPropagation();

    console.log("d");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [isEdited]);

  return (
    <div className={classes["product-item"]}>
      <form onSubmit={editItemHandler}>
        <ProductItemContent
          editedText={editedText}
          isEdited={isEdited}
          inputRef={inputRef}
          setEditedText={setEditedText}
          product={product}
        />

        <ButtonSection
          isEdited={isEdited}
          name={"btn" + Math.random() * 10}
          onRemove={removeItemHandler}
          onEdit={editItemHandler}
        />

        <br />
      </form>
    </div>
  );
};

export default ProductItem;
