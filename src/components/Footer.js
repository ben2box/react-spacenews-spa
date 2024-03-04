import logo from '../resources/logo.svg'

export default function Footer() {
    return (
          <footer id='Footer' className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
            <p className="col-md-4 mb-0 text-body-secondary">
              © 2024 Faster Than Light Inc
            </p>


            <p className="col-md-4 mb-0 text-body-secondary text-end">
             <img
              src={logo}
              alt="FTL Logo"
              width="25"
              height="25"
              className="d-inline-block align-text-top logo"
            />
              Spiral out. Keep going.
            </p>
          </footer>
    );
  }
  