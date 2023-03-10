import React, { useState, useEffect } from "react";
import "./styles.css";

//https://api.github.com/users/void-muerte
export default function DataHooks({ login }) {
  const [data, updateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(updateData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);
  if (loading) return <h1>Loading</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  return (
    <div className="App compo">
      <h1>{data.name}</h1>
      <h3>{data.location}</h3>
      <img alt={data.login} src={data.avatar_url} />
    </div>
  );
}
