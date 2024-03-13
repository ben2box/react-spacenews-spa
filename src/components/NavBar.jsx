import { useContext, useState } from 'react';
import { SearchTermContext } from '../Context/SearchTermContext';
import { DarkModeContext } from '../Context/DarkModeContext';
import logo from '../resources/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



export default function Navbar({handleSearchRoute}) {
  const [active, setActive] = useState('News') 
  const [label, setLabel] = useState('')
  const {setSearchTerm} = useContext(SearchTermContext)
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  const smLogo = (
         <img
              src={logo}
              alt="FTL Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top logo"
            />
  )

  const handleLabelUpdate = e => {
      
      setLabel(e.target.value)
      
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(label)
    setLabel('')
    //label.replace(/ /g, '%20') --> in case encoding spaces to %20 was needed
  }

  const handleThemeClick = () => {
    toggleDarkMode()
  }

  const handleNewsClick = () => {
    setActive('News')
  }

  const handleBlogClick = () => {
    setActive('Blog')
  }

  const handleReportsClick = () => {
    setActive('Reports')
  }


    return (
      <nav
        className={`navbar fixed-top navbar-expand-lg ${darkMode ? `navbar-dark bg-dark` : `navbar-light bg-light`}`}
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={handleNewsClick}>
            {smLogo}
            FTL Newsfeed Network
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-end `}
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              {smLogo}
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                FTL Newsfeed Network
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className='text-link' to='/'>
                    <button className={`nav-link ${active === 'News' ? `active fw-bold`: ``}`} aria-current="page"onClick={handleNewsClick}>
                      Latest News
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className='text-link' to='/blog'>
                    <button className={`nav-link ${active === 'Blog' ? `active fw-bold`: ``}`} aria-current="page" onClick={handleBlogClick}>
                      Blog
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className='text-link' to='/reports'>
                    <button className={`nav-link ${active === 'Reports' ? `active fw-bold`: ``}`} aria-current="page" onClick={handleReportsClick}>
                      Reports
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <button id='themeBtn' className="nav-link" onClick={handleThemeClick}><FontAwesomeIcon icon={faCircleHalfStroke}/> Light/Dark</button>
                </li>
              </ul>
              <form id='searchForm' className="d-flex mt-3 mt-lg-0" role="search">
                <input
                  id='searchFormInput'
                  className="form-control me-2"
                  type="search"
                  placeholder="Search the Cosmos"
                  aria-label="Search"
                  value={label}
                  onChange={handleLabelUpdate}
                />
                <button className="btn btn-outline-info" type="submit"
                disabled={label.length === 0}
                onClick={handleSubmit}>
                  <strong>Search</strong>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
}