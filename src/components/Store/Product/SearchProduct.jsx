import { useEffect, useState } from "react";
import { Product as ProductClass } from "../../../services/Products";

export const SearchProduct = (props) => {
  const [results, setResults] = useState([]);
  const { query, selectProduct } = props;
  useEffect(() => {
    (async () => {
      const productController = new ProductClass();
      const response = await productController.searchProducts(query);
      setResults(response);
    })();
  }, [query]);
  if (results.length === 0) return "";
  return (
    <div className="results" style={{top:'50px'}}>
      <ul>
        {results.map((productItem) => (
          <li key={productItem.id} onClick={() => selectProduct(productItem)}>
            {productItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
