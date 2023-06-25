import { projects } from "../../data/fake";
import Project from "../project/Project";
import "./projects.scss";

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <h1 className="head">My Works</h1>
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
}
