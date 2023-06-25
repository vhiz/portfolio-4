import Darkmode from "../darkmode/Darkmode";
import "./navbar.scss";

export default function Navbar() {
  const links = [
    {
      id: 1,
      name: "Intro",
      url: "#intro",
    },
    {
      id: 3,
      name: "Projects",
      url: "#projects",
    },
    {
      id: 2,
      name: "Skils",
      url: "#skills",
    },
    {
      id: 4,
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <div className="navbar">
      <a href="#intro">
        <img src="/logo.png" alt="" />
      </a>
      <div className="links">
        {/* <Darkmode /> */}
        {links.map((link) => (
          <a href={link.url} key={link.id}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
