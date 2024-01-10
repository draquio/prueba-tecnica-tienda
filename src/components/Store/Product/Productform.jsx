import { SearchProduct } from "./SearchProduct";

const Productform = (props) => {
  const {
    products,
    handleChangeQuantity,
    index,
    query,
    selectProduct,
    activeInput,
    removeInput,
    input,
    setQuery,
    setActiveInput,
  } = props;
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
        {query.length && activeInput === index ? (
          <SearchProduct query={query} selectProduct={selectProduct} />
        ) : (
          ""
        )}
      </div>
      <div className="product_number_group">
        <input
          type="number"
          name="quantity"
          value={products[index] ? products[index].quantity : 0}
          onChange={(e) => handleChangeQuantity(index, e)}
        />
        <input value={products[index] ? products[index].price : 0} disabled />

        <input
          name="subtotal"
          value={products[index] ? products[index].subtotal : 0}
          disabled
        />
        <button
          className="btn blue_btn add_item_button"
          onClick={(e) => removeInput(e, input.id, index)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Productform;
