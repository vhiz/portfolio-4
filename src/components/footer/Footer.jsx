import "./footer.scss";

export default function Footer() {
  const images = [
    {
      id: 1,
      src: "/twitter.png",
      url: "https://twitter.com/Vhiz19?t=ePCT_nk3pT3qmxffqLtSNA&s=09",
    },
    {
      id: 2,
      src: "/whatsapp.png",
      url: "https://wa.link/31vrvp",
    },
    {
      id: 3,
      src: "/linkedin.png",
      url: "https://www.linkedin.com/in/mgbeahurike-victor-40981723b",
    },
    {
      id: 4,
      src: "/github.png",
      url: "https://github.com/vhiz ",
    },
  ];
  return (
    <div className="footer">
      <p>© 2023</p>
      <div className="img">
        {images.map((img) => (
          <a href={img.url} key={img.id} target="blank">
            <img src={img.src} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
