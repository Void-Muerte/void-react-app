import { useReducer } from "react";

export default function UseReducer() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div className="compo">
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "Not checked"}</p>
    </div>
  );
}
