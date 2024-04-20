import React, { useEffect, useState } from "react";
import useDebounce from "../qr/hooks/useDebounce";
import Loader from "../loader";
import axios from "axios";
import UserProfile from "./profile";

function Github_Profile() {
  const [username, setUsername] = useState("");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(username, 600);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  async function findProfile(currentUser) {
    setLoading(true);
    try {
      const response = await axios(
        `https://api.github.com/users/${currentUser || "d32ssv"}`
      );
      if (response.data) {
        setApiData(response.data);
        setLoading(false);
      }
    //   console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    findProfile(debouncedValue);
  }, [debouncedValue]);

  if (loading) return <Loader />;

  return (
    <>
      <section className="h-[50%] w-screen text-center mb-8">
        <input
          placeholder="Enter github username..."
          type="text"
          onChange={(e) => handleChange(e)}
          value={username}
          className="p-3 rounded-full placeholder:text-sky-600 bg-yellow-200 text-blue-700"
        />
      </section>
      {apiData ? <UserProfile userData={apiData} /> : null}
    </>
  );
}

export default Github_Profile;
