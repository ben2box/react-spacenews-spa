function Card({title, url, image_url, summary}) {
    return (
        <div className="card col-auto">
          <img className="img-fluid card-img-top" src={image_url} alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{summary}</p>
  
            <a href={url} rel="noreferrer" target="_blank">
              <button className="btn btn-outline-info fw-bold">
                Read More
              </button>
            </a>
          </div>
        </div>
      );
  }
  
  export default Card;