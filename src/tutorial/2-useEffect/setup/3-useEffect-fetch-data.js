import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); // при такому записі, якщо у нас немає масиву залежностей, в нас буде Infinite loop
    console.log(users);
  };


  useEffect(() => {
    getUsers();
  }, []);

  console.log("users", users);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, html_url, login } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="avatar" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>github link</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
