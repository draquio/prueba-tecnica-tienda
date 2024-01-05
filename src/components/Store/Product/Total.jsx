import { useState, useEffect } from "react";
import { calculateTotal } from "../../../utils/Funtions";

const Total = (props) => {
    const {products} = props
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        setTotal(calculateTotal(products))
    },[products])
  return (
    <div className="products_total">Total <input type="number" disabled value={total}/></div>
  )
}

export default Total
