import "./styles.css";
//secret component, visible to authorized users
function SecretComponet() {
  return <h1>Information for authorized users only</h1>;
}
function RegularComponent() {
  return <h1>Regular information which everyone can see.</h1>;
}
export default function Condrend(props) {
  return (
    <div className="compo">
      {props.authorized ? <SecretComponet /> : <RegularComponent />}
    </div>
  );
}
