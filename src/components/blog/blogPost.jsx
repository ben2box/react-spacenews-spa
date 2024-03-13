export default function BlogPost({title, url, image_url, summary, publisher, date}) {
    return (
        
        // <div className="col-md-6">
        //     <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        //     <div className="col p-4 d-flex flex-column position-static">
        //         <strong className="d-inline-block mb-2 text-primary-emphasis">{publisher}</strong>
        //         <h3 className="mb-0">{title}</h3>
        //         <div className="mb-1 text-body-secondary">{date}</div>
        //         <p className="card-text mb-auto">{summary}</p>
        //         <a href={url} rel="noreferrer" target="_blank">
        //             <button className="btn btn-outline-info fw-bold">
        //             Read More
        //             </button>
        //         </a>
        //     </div>
        //         <div className="col-auto d-none d-lg-block">
        //             <img className="blog-post-img img-fluid" src={image_url} alt='Blog Post Thumbnail' />
        //         </div>
        //     </div>
        // </div>

        <div className="mb-4 p-0 rounded" data-bs-theme='dark' style={{backgroundImage: `url(${image_url})`, "backgroundSize": "cover", "maxWidth":"80vw"}}>
            <div className="darker-mask p-4 p-md-5 rounded" style={{"height":"50vh"}} >
                <div className="col-10 col-lg-6 px-0">
                <strong className="d-inline-block mb-2 text-info-emphasis">{publisher}</strong>
                <h1 className="blog-title display-4 fst-italic">{title}</h1>
                <div className="mb-1 text-body-secondary">{date.slice(0,10)}</div>
                <p className="blog-lead lead my-4">{summary}</p>
                {/* <p className="lead mb-0"><a href={url} className="text-body-emphasis fw-bold">Continue reading...</a></p> */}
                <a href={url} rel="noreferrer" target="_blank">
                    <button className="btn btn-outline-info fw-bold">
                        Read More
                    </button>
                </a>
                </div>
            </div>
        </div>
    
    )
}