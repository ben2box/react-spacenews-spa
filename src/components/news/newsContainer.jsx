import { useEffect, useState, useContext} from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchTermContext } from '../../context/searchTermContext';
import Card from './newsCard';
import Pagination from '../common/pagination';


const BASE_URL = 'https://api.spaceflightnewsapi.net/v4/articles/'


// TODO: Try letting go of the Search Context and using the query itself as the search initializer -> Big Refactor

function NewsContainer() {
  
  const [api, setApi] = useState(BASE_URL)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const [news, setNews] = useState([])
  const [next, setNext] = useState('')
  const [previous, setPrevious] = useState('')
  // const [page, setPage] = useState(1)
  const [newsCount, setNewsCount] = useState(1)
  const {searchTerm, setSearchTerm} = useContext(SearchTermContext);

  const [searchParams, setSearchParams] = useSearchParams({page: 1, search: ''})
  let page = searchParams.get("page")
  let search = searchParams.get("search")

  const sortOldestQuery = `ordering=published_at`
  const sortNewestQuery = `ordering=-published_at`
  const searchQuery= `search=${searchTerm}`

  
  
  useEffect(() => {
    
    search = searchTerm
    
    if (search !== ''){
      setApi(BASE_URL+'?search='+search)
      // setPage(1)
      setSearchParams({page: 1, search})
      setSearchTerm('')
      
    }
  }, [searchTerm,setSearchParams])
  

  useEffect(() => {
    console.log('Launching useEffect');
    async function fetchNews() {
      console.log('Fetching'+api);
      try {
        setLoading(true)
        const response = await fetch(`${api}`);
        const data = await response.json()
       
        setNewsCount(data.count)
        setNext(data.next)
        setPrevious(data.previous)
        setNews(data.results);
       
        
          
      } catch (e) {
        setError(e);
        if (error !== null) { console.log(error.message) }
      } finally {
        setLoading(false)
      }
      
    }
    fetchNews()
    
      
  },[api, error]);

    const handleOnClickNext = () => {
      setApi(next)
      // setPage(p => p+1)
      page = parseInt(page) +1;
      setSearchParams({page, search})
      
      
    }
    
    const handleOnClickPrev = () => {
      setApi(previous)
      page = parseInt(page) -1;
      setSearchParams({page, search: search})
    }


    const handleSortByOld = () => {
      if (api.includes('search=')) {
        setApi(`${BASE_URL}?${searchQuery}&${sortOldestQuery}`)
        // setPage(1)
      } else {
        setApi(`${BASE_URL}?${sortOldestQuery}`)
        // setPage(1) 
      }
      

      
    }
    const handleSortByNew = () => {
      if (api.includes('search=')) {
        setApi(`${BASE_URL}?${searchQuery}&${sortNewestQuery}`)
        // setPage(1)
      } else {
        setApi(`${BASE_URL}?${sortNewestQuery}`)
        // setPage(1) 
      }
    }

    const handleClearFilters = () => {
      setApi(BASE_URL)
      setSearchParams({page: 1})
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
            ) : newsCount !== 0 ? (
              news.map((card) => (
                <Card
                key={card.id}
                title={card.title}
                url={card.url}
                image_url={card.image_url}
                summary={card.summary}
                />
              ))
            ) : (
              <h3 className="text-center">No results found</h3>
              )}
        </div>
    );
}

export default NewsContainer;