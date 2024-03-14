import { useState } from "react";

function Card({title, url, image_url, summary}) {
  const [active, setActive] = useState(false)
  return (
      <div className="card col-auto" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} >
        <a href={url} target="_blank" rel="noreferrer"><img className="img-fluid card-img-top" src={image_url} alt="News" /></a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{summary}</p>

          <a href={url} rel="noreferrer" target="_blank">
            <button className={`btn btn-outline-info fw-bold ${active? 'active' : null}`}>
              Read More
            </button>
          </a>
        </div>
      </div>
    );
}

export default Card;