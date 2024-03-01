
export default function Hero() {
    return (
      <div className="bg-dark text-secondary text-center" id="heroDiv">
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
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  What's New?
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Upcoming Flights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}