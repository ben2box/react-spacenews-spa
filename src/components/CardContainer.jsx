import { useEffect, useState, useContext} from 'react';
import { SearchTermContext } from '../Context/SearchTermContext';
import Card from './Card';
import Pagination from './Pagination';


const BASE_URL = 'https://api.spaceflightnewsapi.net/v4/articles/'


function CardContainer() {
  
  const [api, setApi] = useState(BASE_URL)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const [news, setNews] = useState([])
  const [next, setNext] = useState('')
  const [previous, setPrevious] = useState('')
  const [page, setPage] = useState(1)
  const [newsCount, setNewsCount] = useState(1)
  const {searchTerm, setSearchTerm} = useContext(SearchTermContext);
  
  const sortOldestQuery = `ordering=published_at`
  const sortNewestQuery = `ordering=-published_at`
  const searchQuery= `search=${searchTerm}`

  console.log(searchTerm)

  useEffect(() => {
    if (searchTerm !== ''){
      setApi(BASE_URL+'?search='+searchTerm)
      setPage(1)
      setSearchTerm('')
    }
  }, [searchTerm, setSearchTerm])

  
  
  useEffect(() => {
    console.log('RUNNING USEEFFECT')  
  
    
    async function fetchNews() {
      try {
        setLoading(true)
        console.log('FETCHING: ' + api)  
        const response = await fetch(`${api}`);
        const data = await response.json()
       
        setNewsCount(data.count)
        console.log('This fetch returned '+data.count+' news pieces.')
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
      setPage(p => p+1)
    }
    
    const handleOnClickPrev = () => {
      setApi(previous)
      setPage(p => p-1)
    }


    const handleSortByOld = () => {
      if (api.includes('search=')) {
        setApi(`${BASE_URL}?${searchQuery}&${sortOldestQuery}`)
        setPage(1)
      } else {
        setApi(`${BASE_URL}?${sortOldestQuery}`)
        setPage(1) 
      }
      

      
    }
    const handleSortByNew = () => {
      if (api.includes('search=')) {
        setApi(`${BASE_URL}?${searchQuery}&${sortNewestQuery}`)
        setPage(1)
      } else {
        setApi(`${BASE_URL}?${sortNewestQuery}`)
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

export default CardContainer;