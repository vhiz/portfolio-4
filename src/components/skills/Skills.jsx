import { useEffect, useState } from "react";
import "./skills.scss";
import { backend, frontend, other } from "../../data/fake";

export default function Skills() {
  const [options, setOptions] = useState("f");
  const [data, setData] = useState(frontend);
  useEffect(() => {
    if (options === "f") {
      setData(frontend);
    }
    if (options === "b") {
      setData(backend);
    }
    if (options === "o") {
      setData(other);
    }
  }, [options]);
  return (
    <div id="skills" className="skills">
      <div className="imgContanier">
        <img src="/2.jpg" alt="" />
        <div className="imgText">
          <h1>Fullstack Development Skills</h1>
        </div>
      </div>
      <div className="options">
        <span
          className={options === "f" ? "active" : null}
          onClick={() => setOptions("f")}
        >
          Frontend
        </span>
        <span
          className={options === "b" ? "active" : null}
          onClick={() => setOptions("b")}
        >
          Backend
        </span>
        <span
          className={options === "o" ? "active" : null}
          onClick={() => setOptions("o")}
        >
          Others
        </span>
      </div>
      <div className="textContanier">
        <div className="info">
          {data.skills.map((skill, i) => (
            <p key={i}>{`- ${skill}`}</p>
          ))}
        </div>
        <div className="img">
          <img src={data.img} alt="" />
        </div>
      </div>
    </div>
  );
}
