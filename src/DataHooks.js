import React, { useState, useEffect } from "react";
import "./styles.css";

//https://api.github.com/users/void-muerte
export default function DataHooks({ login }) {
  const [data, updateData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(updateData);
  }, [login]);
  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <h3>{data.location}</h3>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }
  return <div>No user Available</div>;
}
