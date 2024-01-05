import { useEffect, useState } from "react";
import { Client as ClientClass } from "../../../services/Client";

const SearchClient = (props) => {
  const [results, setResults] = useState([]);
  const { query, selectClient } = props;
  useEffect(() => {
    (async () => {
      const clientController = new ClientClass();
      const response = await clientController.searchClients(query);
      setResults(response);
    })();
  }, [query]);
  if (results.length === 0) return "";
  return (
    <div className="results">
      <ul>
        {results.map((clientItem) => (
          <li
            key={clientItem.id}
            onClick={() => selectClient(clientItem)}
          >
            {clientItem.nombre + " " + clientItem.apellidos}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchClient;
