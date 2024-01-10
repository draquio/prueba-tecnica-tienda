import "./Details.scss";
import { useEffect, useState } from "react";
import IS from "../../utils/InitialState.json"
export const Details = () => {
  const [sales, setSales] = useState(IS);
  useEffect(() => {
    const sale = localStorage.getItem("sale");
    if (sale) {
      setSales(JSON.parse(sale));
    }
  }, []);
  if(!sales) return ""
  return (
    <div className="details" id="details">
      <h2>Details</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        alias, soluta ipsam esse perferendis.
      </p>
      <div className="details_table">
        <div className="details_labels">
          <label>Name</label>
          <label>Total</label>
          <label>Products</label>
          <label>Subtotal</label>
        </div>
        {sales.map((sale) => (
          <div key={sale.id} className="saleitem">
            <span>{sale.client.nombre + " " + sale.client.apellidos}</span>
            <span>{sale.total + " " + sale.country.moneda}</span>
            <span className="saleitem_name">
              {sale.products.map((product, index) => (
                <div key={index} className="saleitem_product">

                  {product.name} ({product.quantity})
                </div>
              ))}
            </span>
            <span>
              {sale.products.map((product, index) => (
                <div key={index} className="saleitem_product">
                    $ {product.subtotal}
                </div>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
