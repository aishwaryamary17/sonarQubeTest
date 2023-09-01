import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function ProductTable(props) {
  const { tableData } = props;
  const [tableArray, setTableArray] = useState(tableData);
  const [countryArray, setCountryArray] = useState([]);
  const [selectedCountry, setSlectedCountry] = useState("All");

  useEffect(() => {
    let countryArr = [];
    tableData.forEach((product) => {
      if (
        countryArr.length == 0 ||
        !countryArr.includes(product.manufacturerBy)
      ) {
        countryArr.push(product.manufacturerBy);
      }
    });
    setCountryArray(countryArr);
  }, []);

  const filterTable = (event) => {
    if (event.target.value === "All") {
      setTableArray(tableData);
    } else {
      const filteredData = tableData.filter(
        (product) => product.manufacturerBy == event.target.value
      );
      console.log("selected value", filteredData, event.target.value);
      setTableArray(filteredData);
    }
    setSlectedCountry(event.target.value);
  };

  console.log(countryArray);
  return (
    <div className="productTable">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCountry}
        label="Country"
        onChange={filterTable}
        style={{ width: 100, color: "black", marginTop: 10 }}
      >
        <MenuItem value="All">All</MenuItem>
        {countryArray &&
          countryArray.length > 0 &&
          countryArray.map((country,index) => (
            <MenuItem key={`${country}${index}`} value={country}>{country}</MenuItem>
          ))}
      </Select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Manufactured By</th>
            <th>Product Orign</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.length > 0 &&
            tableArray.map((product) => {
              return (
                <tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>{product.manufacturerBy}</td>
                  <td>{product.productOrgin}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
