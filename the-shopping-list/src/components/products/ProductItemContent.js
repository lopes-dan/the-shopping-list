import classes from "./ProductItemContent.module.css";

const ProductItemContent = ({
  inputRef,
  setEditedText,
  isEdited,
  editedText,
  product
}) => {
  const checkboxHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <label onClick={checkboxHandler} className={classes["container"]}>
        <input onClick={checkboxHandler} type="checkbox" />
        <span className={classes["checkmark"]}></span>
      </label>

      <>
        {isEdited ? (
          <input
            type="text"
            ref={inputRef}
            onClick={checkboxHandler}
            className={classes["edited-input"]}
            onChange={(e) => setEditedText(e.target.value)}
            value={editedText}
          />
        ) : (
          <div onClick={checkboxHandler} className={classes["not-edited"]}>
            <label className="not-edited-text" ref={inputRef}>
              {" "}
              {product}{" "}
            </label>
          </div>
        )}
      </>
    </>
  );
};

export default ProductItemContent;
