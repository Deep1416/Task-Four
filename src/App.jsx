import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState("");
  const [list, setList] = useState([]);
  const [productNameError, setProductNameError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");

  const handleSubmit = () => {
    const data = { name: name, price: Number(price) };

    if (!name) {
      setProductNameError("The Product Name field is required.");
      return;
    } else {
      setProductNameError("");
    }

    if (!price) {
      setProductPriceError("The Product Name field is required.");
      return;
    } else {
      setProductPriceError("");
    }

    setList([...list, data]);

    setName("");
    setPrice("");
  };
  console.log(list);
  const totalAmount = list.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  return (
    <>
      <div className="max-w-screen-lg m-auto">
        <div className="mt-24">
          <h1 className="text-3xl font-semibold mb-4">Task Four</h1>
          <p className="text-[14px] mb-4">
            Storing the input data with Product Name and Product Price as an
            object into array, displaying that list data, calculating total
            Product Price using javascript.
          </p>
          <div className="flex flex-col  gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="productName">Product Name *</label>
              <input
                value={name}
                type="text"
                id="productName"
                className="border border-gray-500 w-52 px-4 py-2"
                onChange={(e) => setName(e.target.value)}
              />
              {productNameError && (
                <p className="text-red-500">{productNameError}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="productPrice">Product Price *</label>
              <input
                value={price}
                type="text"
                id="productPrice"
                className="border border-gray-500 w-52 px-4 py-2"
                onChange={(e) => setPrice(e.target.value)}
              />
              {productPriceError && (
                <p className="text-red-500">{productPriceError}</p>
              )}
            </div>
            <div>
              <button
                className="bg-blue-400 rounded-md px-6 py-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mt-4">OutPut Result :-</h2>
            <div>
              <h3 className="text-2xl font-semibold">Sale Price</h3>
              <ul className="flex flex-col list-disc">
                {list.map((e, i) => {
                  return (
                    <>
                      <li key={i}>
                        {e.name} - {e.price}{" "}
                      </li>
                    </>
                  );
                })}
              </ul>
              <div>
                <h3 className="text-2xl font-medium">Total Price :-</h3>
                <p>{totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
