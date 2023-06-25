import "./intro.scss";

export default function Intro() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="intro" className="intro">
      <div className="info">
        <h1>Mgbeahurike Victor Uchenna Full Stack developer.</h1>
        <p>
          Turing ideas into reality.Giving the people a way to express through
          tech.
        </p>
        <button onClick={() => scrollToSection("contact")}>Contact 📞</button>
      </div>
      <div className="imgContainer">
        <img src="/1.png" alt="" />
      </div>
    </div>
  );
}
