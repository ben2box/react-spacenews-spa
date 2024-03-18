import { Link } from 'react-router-dom'

export default function Hero({active, handleNewsClick, handleBlogClick, handleReportsClick}) {
    return (
      <div className="text-secondary text-center" id="heroDiv">
        <div className="mask px-4 py-5">
          <div className="py-5">
            <h1 className="display-5 fw-bold text-white">
              Space News brought to you <br /> Faster Than Light{" "}
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4">
                Not really faster than light... but you know what we mean.
                <br />
                It's quick enough.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link className='text-link' to="/">
                  <button
                  type="button"
                  className={`btn btn-lg px-4 me-sm-3 ${active === 'News' ? 'fw-bold btn-outline-info' : 'btn-outline-light'} `}
                  onClick={handleNewsClick}
                  >
                    What's New?
                  </button>
                </Link>
                <Link className='text-link' to="/blog">
                  <button
                  type="button"
                  className={`btn btn-lg px-4 me-sm-3 ${active === 'Blog' ? 'fw-bold btn-outline-info' : 'btn-outline-light'} `}
                  onClick={handleBlogClick}
                  >
                    Blog
                  </button>
                </Link>
                <Link className='text-link' to="/reports">
                  <button
                  type="button"
                  className={`btn btn-lg px-4 me-sm-3 ${active === 'Reports' ? 'fw-bold btn-outline-info' : 'btn-outline-light'} `}
                  onClick={handleReportsClick}
                  >
                    Reports
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}