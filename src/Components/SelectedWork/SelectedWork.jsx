import "./SelectedWork.css";
import React from "react";

function SelectedWork({works}) {
  
  const workElements = works.map((work) => {
    return (
      <li className="works" key={work.id} >
        <a className="works-links" href={work.url}>{work.title}</a>
      </li>
    )
  })

  return (
    <div className="works-wrapper">
      <ul className="works-list"> Selected Works
        {workElements}
      </ul>
      </div>
  );
}

export default SelectedWork;
