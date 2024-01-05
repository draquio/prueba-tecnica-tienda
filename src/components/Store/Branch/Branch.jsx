
import { useState } from "react"
import "./Branch.scss"
import SearchBranch from "./SearchBranch"
import { CloseIcon } from "../../Icons/Icons";
const Branch = (props) => {
  const {setCountry, country} = props;
  const [query, setQuery] = useState("");
  // const [countrySelected, setCountrySelected] = useState({});
  const selectCountry = (country) => {
    setCountry(country);
    setQuery("")
  }
  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  }
  const deleteCountry = () => {
    setCountry({})
    setQuery("")
  }
  return (
    <div className="branch">
      <label>Branch: {country.nombre ? <>{country.nombre} <span onClick={deleteCountry}><CloseIcon /></span></> : ""} </label>
      <form className="branch_form">
        <input type="text" onChange={handleChangeQuery} value={ country.nombre ? country.nombre : query}/>
        {query.length ? <SearchBranch query={query} selectCountry={selectCountry} /> : ""}
        <input type="text" disabled value={country.moneda ? country.moneda : ""} />
      </form>
    </div>
  )
}

export default Branch
