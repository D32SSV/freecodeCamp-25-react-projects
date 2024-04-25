import { useEffect, useState } from "react";

function useFetch( url, options = {} ) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setErr(null);
      setPending(false);
    } catch (error) {
      setErr(`${error} This is the error`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, err, pending };
}

export default useFetch;
