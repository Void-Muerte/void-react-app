import "./styles.css";
import img_ex from "./images/eye.png";
function Header(props) {
  return (
    <header>
      <h1>My first {props.prog} project</h1>
    </header>
  );
}
function Objective(props) {
  return (
    <div>
      <h2>How to create a scene in {props.env}</h2>
      <ul>
        {props.objectives.map((objective) => (
          <li key={objective.id}>{objective.name}</li>
        ))}
      </ul>
    </div>
  );
}
function Eye() {
  return (
    <>
      <img src={img_ex} height={150} alt="eye" />
    </>
  );
}
const objectives = [
  "Create model using blender",
  "Export model to gltf",
  "Create the Html ",
  "Create a scene",
  "Render the scene",
];
const listObj = objectives.map((objective, objectiveId) => ({
  id: objectiveId,
  name: objective,
}));

export default function App() {
  return (
    <>
      <div className="App compo">
        <Header prog="React" />
        <Eye />
      </div>
      <div className="compo">
        <Objective env="Web3D" objectives={listObj} />
      </div>
    </>
  );
}
