import "./App.css";
import ProductTable from "./ProductTable";

const tableData = [
  {
    productId: "005",
    manufacturerBy: "India",
    productOrgin: "RE",
  },
  {
    productId: "006",
    manufacturerBy: "India",
    productOrgin: "North Korea",
  },
  {
    productId: "007",
    manufacturerBy: "India",
    productOrgin: "RE",
  },
  {
    productId: "003",
    manufacturerBy: "Germany",
    productOrgin: "Germany Mercedes benz",
  },
  {
    productId: "004",
    manufacturerBy: "Germany",
    productOrgin: "Auto Union AG",
  },
  {
    productId: "001",
    manufacturerBy: "Germany",
    productOrgin: "Germany mercedes benz",
  },
  {
    productId: "002",
    manufacturerBy: "Londan",
    productOrgin: "Bavarian Motor Works",
  },
];

function App() {
  return (
    <div className="App">
      <ProductTable tableData={tableData} />
    </div>
  );
}

export default App;
