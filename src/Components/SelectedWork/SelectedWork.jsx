import "./SelectedWork.css";
import React from "react";

function SelectedWork() {
  return (
    <div className="works-wrapper">
      <ul className="works-list"> Selected Works
        <li className='works'>
          <a href='https://experience-exchange.vercel.app/'>
            Experience Exchange
          </a>
        </li>
        <li className='works'>
          <a href='https://word-atlas.vercel.app/'>Word Atlas</a>
        </li>
        <li className='works'>
          <a href='https://stretch-tech-theta.vercel.app/'>MET Gallery</a>
        </li>
      </ul>
      </div>
  );
}

export default SelectedWork;
