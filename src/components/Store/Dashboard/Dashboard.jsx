import MenuSidebar from "../MenuSidebar/MenuSidebar";
import NewSaleIcon from "../../../assets/newsale.png";
import "./Dashboard.scss";
import Client from "../Client/Client";
import Product from "../Product/Product";
import Branch from "../Branch/Branch";
import { useState } from "react";
import Alert from "../../complements/Alert/Alert";
import { calculateTotal } from "../../../utils/Funtions";
export const Dashboard = () => {
  const [client, setClient] = useState({});
  const [country, setCountry] = useState({});
  const [products, setProducts] = useState([]);
  const [quantityInputs, setQuantityInputs] = useState([{}]);
  const [type, setType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const Save = () => {
    if (client.nombre && country.nombre && products.length) {
      const storedItems = localStorage.getItem("sale");
      const sale = { client: client, country: country, products: products, id:crypto.randomUUID(), total: calculateTotal(products) };
      if (storedItems) {
        const data = JSON.parse(storedItems);
        const newStorage = [...data, sale];
        localStorage.setItem("sale", JSON.stringify(newStorage));
      } else {
        localStorage.setItem("sale", JSON.stringify([sale]));
      }
      setClient({});
      setCountry({});
      setProducts([]);
      setQuantityInputs([{}])
      setType("success");
      setErrorMessage("Sale successfully completed");
    } else {
      setType("error");
      setErrorMessage("All fields must be completed");
    }
  };
  return (
    <div className="dashboard_container" id="dashboard">
      <MenuSidebar />
      <div className="dashboard">
        <section className="dashboard_title">
          <img src={NewSaleIcon} />
          <h2>New Sale</h2>
        </section>
        <section className="dashboard_inputs">
          <h2 className="subtitle">Document</h2>
          <div className="client_section">
            <Client setClient={setClient} client={client} />
            <Branch setCountry={setCountry} country={country} />
          </div>
          <div className="product_section">
            <h2 className="subtitle">Details</h2>
            <Product products={products} setProducts={setProducts} quantityInputs={quantityInputs} setQuantityInputs={setQuantityInputs}/>
          </div>
        </section>
        {errorMessage.length ? (
          <Alert
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            type={type}
          />
        ) : (
          ""
        )}
        <div className="save_section">
          <button className="btn blue_btn" onClick={Save}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

