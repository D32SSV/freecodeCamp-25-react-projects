import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const data = await axios(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      setProducts((prev) => [...prev, ...data.data.products]);
    //   console.log(data.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
      <div className="grid grid-cols-4 gap-4">
        {products.length
          ? products.map((item, index) => {
              return (
                <div className="flex flex-col border-4 border-red-600 gap-2">
                  <img
                    key={index}
                    src={item.thumbnail}
                    alt={item.description}
                    style={{ width: "20rem" }}
                    className="p-1"
                  />
                  <p key={index}>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <button
        disabled={disableButton}
        className={`w-32 m-8 ${
          disableButton ? "bg-slate-500" : "bg-green-700"
        }`}
        onClick={() => setCount(count + 1)}
      >
        Load More
      </button>
      {disableButton ? <p>All Products have been loaded</p> : null}
    </div>
  );
}

export default LoadMore;
