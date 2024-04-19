import React, { useEffect, useState } from "react";
import axios from "axios";

function Scroll({ url }) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  function onScroll() {
    const heightCovered = document.documentElement.scrollTop;
    const totalContentHeight = document.documentElement.offsetHeight;
    const currentVisibleHeight = document.documentElement.clientHeight;
    const ht = totalContentHeight - currentVisibleHeight;

    const centAge = (heightCovered / ht) * 100;
    setScrollTop(centAge);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  async function fetchData(currentURL) {
    try {
      setLoading(true);
      const response = await axios(currentURL);

      if (response) {
        setProductData(response.data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);
//   console.log(productData, loading);
  return (
    <>
      <div className="fixed z-10 bg-amber-500 top-0 w-[100%] h-[10px]">
        <div className="h-[10px] bg-violet-800" style={{ width: `${scrollTop}%` }}></div>
      </div>
      <h3 className="text-3xl text-center">Custom Scroll Indicator</h3>
      {productData.length
        ? productData.map((item, id) => {
            return (
              <p key={id} className="text-lg text-center">
                {item.title}
              </p>
            );
          })
        : null}
    </>
  );
}

export default Scroll;
