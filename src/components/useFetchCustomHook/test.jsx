import React from "react";
import useFetch from "./useFetchHook";

function FetchHookTestItem() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  //   console.log(data, error, pending);
  return (
    <>
      <div className="text-center text-3xl font-bold border-2">
        Fetch DATA HOOK
      </div>
      {pending ? <h3>Pending ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem, index) => (
            <p key={index} className="text-center">
              {productItem.title}
            </p>
          ))
        : null}
    </>
  );
}

export default FetchHookTestItem;
