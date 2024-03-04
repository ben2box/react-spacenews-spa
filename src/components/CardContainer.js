import { useEffect, useState, useContext} from 'react';
import { SearchContext } from '../App';
import Card from './Card'



function CardContainer() {
  
  const [api, setApi] = useState('https://api.spaceflightnewsapi.net/v4/articles/')
  const [news, setNews] = useState([])
  const [next, setNext] = useState('')
  const [previous, setPrevious] = useState('')
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [newsCount, setNewsCount] = useState(0)
  const {searchTerm, updateSearchTerm} = useContext(SearchContext);

  console.log(searchTerm)

  
  useEffect(() => {
    
    async function fetchNews() {
        if (searchTerm !== ''){
          setApi(`https://api.spaceflightnewsapi.net/v4/articles/?search=${searchTerm}`)
          updateSearchTerm('')
          resetFilters()
          
        }
        console.log(api)
        try {
          console.log('RUNNING USEEFFECT: ' + api)  
          setLoading(true)
          console.log('FETCHING')  
          const response = await fetch(`${api}`);
          const data = await response.json()
          
          setNewsCount(data.count)
          console.log(data.count)
          setNext(data.next)
          setPrevious(data.previous)
          setNews(data.results);
          
          
        } catch (e) {
          setError(e);
          if (error !== null) { console.log(error.message)}
        } finally {
            setLoading(false)
        }

      }
      fetchNews()
    },[api, error, searchTerm]);

    const handleOnClickNext = () => {
      setApi(next)
      setPage(p => p+1)
    }
    
    const handleOnClickPrev = () => {
      setApi(previous)
      setPage(p => p-1)
    }


    //TODO: Get sorting working in order, not affected by what page the search is
    const handleSortByOld = () => {
      // setApi(`https://api.spaceflightnewsapi.net/v4/articles/?ordering=published_at`)
      api.includes('search=') ? setApi(`${api}&ordering=published_at`) : setApi(`${api}?ordering=published_at`)

      // setApi(`${api}&ordering=published_at`)
      
    }
    const handleSortByNew = () => {
      // setApi('https://api.spaceflightnewsapi.net/v4/articles/?ordering=-published_at')
      api.includes('search=') ? setApi(`${api}&ordering=-published_at`) : setApi(`${api}?ordering=-published_at`)
      
    }

    const resetFilters = () => {
      setPage(1)
      setNext(null)
      setPrevious(null)
    }

    

    return (
      <div
        id="cardContainer"
        className="row gy-2 gx-0 text-white justify-content-evenly"
      >
        <span className="text-center">Page: {page}</span>
        {/* TODO: Add a cool pagination design */}
        <div id="btnContainer" className="text-center">
          {previous !== null ? (
            <>
              <button className="btn btn-primary" onClick={handleOnClickPrev}>
                Previous Page: {page - 1}
              </button>
              <button className="btn btn-success" onClick={handleOnClickNext}>
                Next Page: {page + 1}
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-success" onClick={handleOnClickNext}>
                Next Page: {page + 1}
              </button>
            </>
          )}
        </div>
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
        {loading ? (
          <h1> LOADING ... </h1>
        ) : newsCount !== 0 ? (
          news.map((card) => (
            <Card
              id={card.id}
              title={card.title}
              url={card.url}
              image_url={card.image_url}
              summary={card.summary}
            />
          ))
        ) : <h3 className='text-center'>No results found</h3>
      }
      </div>
    );
}

export default CardContainer;