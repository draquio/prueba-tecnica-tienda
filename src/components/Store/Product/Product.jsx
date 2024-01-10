import { useState } from "react";
import "./Product.scss";
import {
  CanCreateInput,
  calculateSubTotal,
  verifyProduct,
} from "../../../utils/Funtions";
import Alert from "../../complements/Alert/Alert";
import Total from "./Total";
import Productform from "./Productform";
const Product = (props) => {
  const { products, setProducts, quantityInputs, setQuantityInputs } = props;
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [activeInput, setActiveInput] = useState(null);
  const selectProduct = (product) => {
    if (verifyProduct(products, product)) {
      setErrorMessage("The Product is already added");
    } else {
      setProducts((prevState) => [
        ...prevState,
        {
          ...product,
          quantity: 1,
          price: Math.round(product.price),
          subtotal: Math.round(product.price),
        },
      ]);
    }
    setQuery("");
  };
  const AddInput = () => {
    if (CanCreateInput(products.length, quantityInputs.length)) {
      setQuantityInputs([...quantityInputs, { id: crypto.randomUUID() }]);
    } else {
      setErrorMessage("You must fill out the product field");
    }
  };
  const removeInput = (e, id, index) => {
    e.preventDefault();
    if (quantityInputs.length === 1) return;
    setQuantityInputs(quantityInputs.filter((input) => input.id !== id));
    setProducts((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };
  const handleChangeQuantity = (index, e) => {
    if (!products[index] || e.target.value < 1) return;
    setProducts((prevState) => {
      const newState = [...prevState];
      const price = newState[index].price;
      const quantity = e.target.value;
      newState[index] = {
        ...newState[index],
        quantity,
        subtotal: calculateSubTotal(quantity, price),
      };
      return newState;
    });
  };
  return (
    <div className="product">
      <form>
        <div className="product_label">
          <label htmlFor="product">Product:</label>
          <div className="product_label_group">
            <label htmlFor="quantity">Quantity:</label>
            <label htmlFor="price">Price:</label>
            <label htmlFor="subtotal">Subtotal:</label>
          </div>
        </div>
        {quantityInputs.map((input, index) => (
          <Productform
            key={index}
            products={products}
            setProducts={setProducts}
            index={index}
            query={query}
            selectProduct={selectProduct}
            activeInput={activeInput}
            setActiveInput={setActiveInput}
            handleChangeQuantity={handleChangeQuantity}
            removeInput={removeInput}
            input={input}
            setQuery={setQuery}
          />
        ))}
      </form>
      <div className="footer_products">
        <button
          className="btn blue_btn add_item_button"
          style={{ width: "100px" }}
          onClick={AddInput}
        >
          Add
        </button>
        <Total products={products} />
      </div>
      {errorMessage.length !== 0 ? (
        <Alert
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          type={"error"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
