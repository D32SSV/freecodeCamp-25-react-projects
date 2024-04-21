import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader";
import useDebounce from "../qr/hooks/useDebounce";

function SearchAutoComplete() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const debouncedData = useDebounce(searchParam, 500);
  const [debounceLoader, setDebounceLoader] = useState(false);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query) setDebounceLoader(true);
    else setDebounceLoader(false);
  }

  // ---DebouncedSearch in separate useEffect due to async nature of setState

  useEffect(() => {
    if (debouncedData.length > 0) {
      const filteredData =
        user && user.length
          ? user.filter(
              (item) => item.toLowerCase().indexOf(debouncedData) > -1
            )
          : [];

      setFilterData(filteredData);
      setDropdown(true);
      setDebounceLoader(false);
    } else {
      setDropdown(false);
    }
  }, [debouncedData, user]);

  async function getUserData() {
    try {
      setLoading(true);
      const response = await axios("https://dummyjson.com/users");
      setUser(
        response.data.users.map((user) => user.firstName + " " + user.lastName)
      );
      setLoading(false);
      //   console.log(arr);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  // console.log(user, filterData);

  function handleUser(e) {
    setSearchParam(e.target.innerText);
    setDropdown(false);
  }

  if (loading) return <Loader />;

  return (
    <>
      <section className="text-center">
        <input
          onChange={(e) => handleChange(e)}
          value={searchParam}
          placeholder="Search user..."
          className=" rounded-lg p-4 mb-4"
        />
      </section>

      {debounceLoader ? (
        <Loader />
      ) : dropdown ? (
        filterData.map((item, id) => (
          <p
            key={id}
            className="text-center mt-3 cursor-pointer"
            onClick={(e) => handleUser(e)}
          >
            {item}
          </p>
        ))
      ) : null}
    </>
  );
}

export default SearchAutoComplete;
