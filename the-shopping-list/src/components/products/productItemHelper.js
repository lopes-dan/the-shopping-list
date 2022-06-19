export const editList = (categories, inputRef, product, editedText) => {
    const newArr = [...categories];
    inputRef.current.focus();
  
    const results = newArr.map((item) => {
      if (!item.products) {
        item.products = [];
      } else {
        if (item.products.includes(product)) {
          const newPro = [...item.products];
          newPro[newPro.indexOf(product)] = editedText;
          return { ...item, products: newPro };
        } else {
          return item;
        }
      }
    });
  
    return results;
  };
  