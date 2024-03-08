import "./SelectedWork.css";
import React from "react";

function SelectedWork({ works }) {
  const workElements = works.map((work) => {
    return (
      <li className='works' key={work.id}>
        <a className='works-links' href={work.url}>
          {work.title}
        </a>
      </li>
    );
  });

  return (
      <div className='works-wrapper'>
        <h2 className="selected-works">Selected Works</h2>
        <ul className='works-list'>{workElements}
        </ul>
      </div>
  );
}

export default SelectedWork;
