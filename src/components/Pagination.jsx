function Pagination({previous, handleOnClickPrev, page, next, handleOnClickNext, handleSortByOld, handleSortByNew}) {

    return (
        <div className='paginationContainer container-fluid' aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                {previous !== null ?
                <li className="page-item">
                <button className="page-link" onClick={handleOnClickPrev} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </button>
                </li>
                : null }
                <li className="page-item active">
                <button className="page-link">
                    Page: {page}
                </button>
                </li>
                {next !== null ?
                <li className="page-item">
                <button className="page-link" onClick={handleOnClickNext} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </button>
                </li>
                : null }
            </ul>
            <div className="dropdown text-end">
                <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Sort by
                </button>
                <ul className="dropdown-menu">
                <li>
                    <button className="dropdown-item" onClick={handleSortByOld}>
                    Oldest
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" onClick={handleSortByNew}>
                    Newest
                    </button>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination;