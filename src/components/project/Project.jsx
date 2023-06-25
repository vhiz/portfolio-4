import "./project.scss";

export default function Project({ project }) {
  return (
    <div className="project">
      <div className="info">
        <h1>{project.title}</h1>
        <span>{project.desc}</span>
        <div className="links">
          <button>
            <a href={project.url}>Live Page</a>
          </button>
          <a href={project.github}>
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <img src={project.img} alt="" />
      </div>
    </div>
  );
}
