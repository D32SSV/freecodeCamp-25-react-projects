import React from "react";

function UserProfile({ userData }) {
  const joiningDate = new Date(userData.created_at);
  return (
    <section className="flex justify-around items-center bg-[beige] p-8 h-[45%]">
      <img
        src={userData.avatar_url}
        className="w-[200px] rounded-full p-2 m-2"
      />
      <ol className=" text-sky-900 font-bold text-lg">
        <li>
          <p>{userData.name}</p>
        </li>
        <li>
          <p>From :{userData.location}</p>
        </li>
        <li>
          <p>Profile Url : <a href={userData.html_url}>{userData.html_url}</a></p>
        </li>
        <li>
          <p>
            User since :{" "}
            {`${joiningDate.getDate()}, ${joiningDate.toLocaleString("en-us", {
              month: "short",
            })} ${joiningDate.getFullYear()}`}
          </p>
        </li>
      </ol>
    </section>
  );
}

export default UserProfile;
