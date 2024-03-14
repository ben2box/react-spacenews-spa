import { useState } from "react"

export default function BlogPost({title, url, image_url, summary, publisher, date}) {
    const [active, setActive] = useState(false)

    return (
        
        <div className="blog-post-wrapper mb-4 p-0 rounded" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} data-bs-theme='dark' style={{backgroundImage: `url(${image_url})`, "backgroundSize": "cover", "maxWidth":"80vw"}}>
                <a href={url} rel="noreferrer" target="_blank" style={{"display":"block", "height": "100%", "width":"100%", "textDecoration":"none"}}>
            <div className="blog-post-container darker-mask p-4 p-md-5 rounded" style={{"minHeight":"50vh"}}>
                <div className="col-10 col-xl-6 px-0">
                <strong className="d-inline-block mb-2 text-info-emphasis">{publisher}</strong>
                <h1 className="blog-title display-5 fst-italic">{title}</h1>
                <div className="mb-1 text-body-secondary">{date.slice(0,10)}</div>
                <p className="blog-lead lead">{summary}</p>
                    <button className={`btn btn-outline-info fw-bold ${active? "active" : null}`}>
                        Read More
                    </button>
                </div>
            </div>
                </a>
        </div>
    
    )
}