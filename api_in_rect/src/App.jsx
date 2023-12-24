import axios from "axios";
import { useState } from "react";

function App() {
  const [product, setproduct] = useState([]);
  const getProduct = () => {
    const api = "https://fakestoreapi.com/products/";
    axios
      .get(api)
      .then((product) => {
        setproduct(product.data);
      })
      .catch((err) => console.log(err));

      
  };
  return (
    <>
      <div className="m-5">Api data </div>
      <button
        onClick={getProduct}
        className="px-3 py-.5 bg-red-600 text-white text-sm rounded-md m-5 "
      >
        Get api Data
      </button>
      <ul>
        {product.map((item) => (
          <li className="bg-orange-200 text-sm py-2 text-center mb-2 ">
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
