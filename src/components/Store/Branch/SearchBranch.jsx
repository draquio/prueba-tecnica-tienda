import { useEffect, useState } from "react";
import { Branch as BranchClass } from "../../../services/Branch";

const SearchBranch = (props) => {
  const { query, selectCountry } = props;
  const [results, setResults] = useState([]);
  useEffect(() => {
    (async () => {
      const branchController = new BranchClass();
      const response = await branchController.searchBranch(query);
      setResults(response);
    })();
  }, [query]);
  if (results.length === 0) return "";
  return (
    <div className="results" style={{top:'50px'}}>
      <ul>
        {results.map((branchItem) => (
          <li
            key={branchItem.id}
            onClick={() => selectCountry(branchItem)}
          >
            {branchItem.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBranch;
