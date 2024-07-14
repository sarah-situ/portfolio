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
            A plant companion app to help you with all your planting care needs.
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
            The Troll Toll Calculator App will help Auckland-based bridge trolls optimise their toll revenue when they select their active bridge.</p>
        <p className="project-link"><a href="https://github.com/sarah-situ/troll-toll-calculator" >GitHub</a></p>
       
          {/* <a href="#" target="_blank" className="project-link">Check it Out</a> */}
      </div>
      </div>
    </>
  )
}
