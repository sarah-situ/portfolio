export default function Projects() {
  return (
    <>
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        <div className="project-container project-card">
          <img
            src="../../images/grow-grub.png"
            alt="grow-grub"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Grow Grub</h3>
          <p className="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          {/* <a href="#" target="_blank" className="project-link">Check it Out</a> */}
        </div>
        <div className="project-container project-card">
          <img
            src="../../images/troll-toll-calculator.png"
            alt="troll-toll"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Troll Toll Calculator</h3>
          <p className="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          {/* <a href="#" target="_blank" className="project-link">Check it Out</a> */}
      </div>
      </div>
    </>
  )
}
