import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
function App() {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col-6">
          <Product></Product>
        </div>
        <div className="col-6">
          <Product></Product>
        </div>
      </div>
    </div>
  );
}

export default App;
