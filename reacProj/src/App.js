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
      <ul>
        <li className="concept">
          <img src="TODO: IMAGE" alt="TODO: TITLE"></img>
          <h2>TODO: TITLE</h2>
          <p>TODO: DESCRIPTION</p>
        </li>
      </ul>
    </div>
  );
}
export default App;
