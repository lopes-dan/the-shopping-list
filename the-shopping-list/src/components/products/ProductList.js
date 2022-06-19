import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
import * as React from "react";

const ProductList = ({ products, id }) => {
  return (
    <>
      <AddProduct id={id} />
      <section className={classes["product-list"]}>
        <section>
          {products &&
            products.map((product) => (
              <ProductItem key={product} product={product} />
            ))}
        </section>
      </section>
    </>
  );
};
export default ProductList;
