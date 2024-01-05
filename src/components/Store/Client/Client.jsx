import {useState } from "react";
import "./Client.scss";
import { CloseIcon } from "../../Icons/Icons";
import SearchClient from "./SearchClient";
const Client = (props) => {
  const {setClient, client} = props
  const [query, setQuery] = useState("");
  // const [clienteName, setClientName] = useState("");
  const getQuery = (e) => {
    setQuery(e.target.value);
  };
  const selectClient = (Selectedclient) => {
    // const { nombre, apellidos, RUT } = Selectedclient;
    setClient(Selectedclient);
    // setClientName(nombre + " " + apellidos + " " + RUT);
    setQuery("");
  };
  const deleteClient = () => {
    setClient({});
    // setClientName("");
    setQuery("");
  };
  return (
    <div className="client">
      <form className="client_form">
        <label htmlFor="client" className="client_form_selected">
          Client: {client.nombre ? <> {client.nombre + " " + client.apellidos + " " + client.RUT} <span onClick={deleteClient}><CloseIcon /></span></>: "" }
        </label>
        <input type="text" name="client" value={client.nombre ? client.nombre + " " + client.apellidos : query} onChange={getQuery} />
        {query.length ? <SearchClient query={query} selectClient={selectClient}/> : ""}
      </form>
      <button className="btn blue_btn add_item_button">+</button>
    </div>
  );
};

export default Client;

