import { SearchProduct } from "./SearchProduct";

const Productform = (props) => {
  const { products, handleChangeQuantity, index, query, selectProduct, activeInput, removeInput, input, setQuery, setActiveInput} = props;
  const handleChangeText = (e) => {
      setQuery(e.target.value);
      setActiveInput(index);
  };
  return (
    <div className="product_form">
      <div className="product_form_item">
        <input
          type="text"
          value={products[index] ? products[index].name : query}
          name="product"
          onChange={(e) => handleChangeText(e)}
        />
        {query.length && activeInput === index ? <SearchProduct query={query} selectProduct={selectProduct} /> : ""}
      </div>
      <div className="product_form_item">
        <input
          type="number"
          name="quantity"
          value={products[index] ? products[index].quantity : 0}
          onChange={(e) => handleChangeQuantity(index, e)}
        />
      </div>
      <div className="product_form_item">
        <input value={products[index] ? products[index].price : 0} disabled />
      </div>
      <div className="product_form_item">
        <input
          name="subtotal"
          value={products[index] ? products[index].subtotal : 0}
          disabled
        />
      </div>
      <button
        className="btn blue_btn add_item_button"
        onClick={(e) => removeInput(e, input.id, index)}
      >
        X
      </button>
    </div>
  );
};

export default Productform;
