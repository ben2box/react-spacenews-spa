import { useEffect, useState, useContext} from 'react';
import { SearchTermContext } from '../../context/searchTermContext';
import ReportPost from './reportPost';
import Pagination from '../common/pagination';


const resultsLimitQuery = '?limit=6'
const BASE_URL = 'https://api.spaceflightnewsapi.net/v4/reports/' + resultsLimitQuery


function NewsContainer() {
  
  const [api, setApi] = useState(BASE_URL)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const [reports, setReports] = useState([])
  const [next, setNext] = useState('')
  const [previous, setPrevious] = useState('')
  const [page, setPage] = useState(1)
  const [reportsCount, setReportsCount] = useState(1)
  const {searchTerm, setSearchTerm} = useContext(SearchTermContext);
  
  const sortOldestQuery = `ordering=published_at`
  const sortNewestQuery = `ordering=-published_at`
  const searchQuery= `search=${searchTerm}`


  useEffect(() => {
    if (searchTerm !== ''){
      setApi(BASE_URL+'&search='+searchTerm)
      setPage(1)
      setSearchTerm('')
    }
  }, [searchTerm, setSearchTerm])

  
  
  useEffect(() => {
  
    
    async function fetchReports() {
      try {
        setLoading(true)
        const response = await fetch(`${api}`);
        const data = await response.json()
       
        setReportsCount(data.count)
        setNext(data.next)
        setPrevious(data.previous)
        setReports(data.results);
       
        
          
      } catch (e) {
        setError(e);
        if (error !== null) { console.log(error.message) }
      } finally {
        setLoading(false)
      }
      
    }
    fetchReports()
    
      
  },[api, error]);

    const handleOnClickNext = () => {
      setApi(next)
      setPage(p => p+1)
    }
    
    const handleOnClickPrev = () => {
      setApi(previous)
      setPage(p => p-1)
    }


    const handleSortByOld = () => {
      if (api.includes('search=')) {
        setApi(`${BASE_URL}&${searchQuery}&${sortOldestQuery}`)
        setPage(1)
      } else {
        setApi(`${BASE_URL}&${sortOldestQuery}`)
        setPage(1) 
      }
      

      
    }
    const handleSortByNew = () => {
      if (api.includes('search=')) {
        setApi(`${BASE_URL}&${searchQuery}&${sortNewestQuery}`)
        setPage(1)
      } else {
        setApi(`${BASE_URL}&${sortNewestQuery}`)
        setPage(1) 
      }
      
    }

    const handleClearFilters = () => {
      setApi(BASE_URL)
      setPage(1)
      setSearchTerm('')
    }


    return (
      <div id="cardContainer" className="row gy-2 gx-0 justify-content-evenly">
        <Pagination previous={previous}
          handleOnClickPrev={handleOnClickPrev}
          page={page}
          handleOnClickNext={handleOnClickNext}
          next={next}
          handleSortByNew={handleSortByNew}
          handleSortByOld={handleSortByOld}
          handleClearFilters={handleClearFilters}
          api={api}
          BASE_URL={BASE_URL}
        />    
            {loading ? (
              <div className='loadingContainer container-fluid text-center'>
              <h1> LOADING ... </h1>
              </div>
            ) : reportsCount !== 0 ? (
              reports.map((report) => (
                <ReportPost
                key={report.id}
                title={report.title}
                url={report.url}
                image_url={report.image_url}
                summary={report.summary}
                />
              ))
            ) : (
              <h3 className="text-center">No results found</h3>
              )}
        </div>
    );
}

export default NewsContainer;