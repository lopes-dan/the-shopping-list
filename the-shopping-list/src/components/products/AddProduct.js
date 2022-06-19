import classes from "./AddProduct.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../components/../store/slices/categorySlice";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../products/../UI/Button";

const AddProduct = ({ id }) => {
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();

  const addProductHandler = (e) => {
    e.stopPropagation();

    setProduct(e.target.value);
  };

  const textFieldHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.length <= 0) {
      alert("Kah, add a product, bae");
      return;
    }
    dispatch(categoryActions.addProduct({ product, id }));

    setProduct("");
  };

  const inputHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <form onSubmit={textFieldHandler} className="btn-text">
        <div className={classes["add-section"]}>
          <div className={classes["add-input-div"]}>
            <input
              type="text"
              placeholder="Add product"
              onClick={inputHandler}
              value={product}
              className={classes["add-product"]}
              onChange={(e) => addProductHandler(e)}
            />
          </div>
          <Button
            onClick={textFieldHandler}
            cssButtonClasses={"btn-pink btn-add"}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
