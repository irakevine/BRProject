import active from "./assets/images/active.jpg";
import nellen from "./assets/images/nellen.jpg";
import second from "./assets/images/second.jpg";

const concepts = [
  {
    title: "active",
    image: active,
    description:
      "Just add your desired image size (width & height) after our URL, and you will get a random image.",
  },
  {
    title: "nellen",
    image: nellen,
    description:
      "Just add your desired image size (width & height) after our URL, and you will get a random image.",
  },
  {
    title: "second",
    image: second,
    description:
      "Just add your desired image size (width & height) after our URL, and you will get a random image.",
  },
];
function App() {
  return (
    <div>
      <header>
        <h1>Key React Concept</h1>
        <p>selected Key React Concept you should know about </p>
      </header>
      <ul id='concepts'>
        <li className="concept">
          <img src={concepts[0].image} alt={concepts[0].title}></img>
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[1].image} alt={concepts[1].title}></img>
          <h2>{concepts[1].title}</h2>
          <p>{concepts[1].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[2].image} alt={concepts[2].title}></img>
          <h2>{concepts[2].title}</h2>
          <p>{concepts[2].description}</p>
        </li>
      </ul>
    </div>
  );
}
export default App;
