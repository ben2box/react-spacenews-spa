import { useEffect, useState, useContext} from 'react';
import { SearchTermContext } from '../../contexto/searchTermContext';
import Pagination from '../common/pagination';
import BlogPost from './blogPost';

const resultsLimitQuery = '?limit=5'
const BASE_URL = 'https://api.spaceflightnewsapi.net/v4/blogs/' + resultsLimitQuery

export default function BlogContainer(){
    const [api, setApi] = useState(BASE_URL)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const [blogs, setBlogs] = useState([])
    const [next, setNext] = useState('')
    const [previous, setPrevious] = useState('')
    const [page, setPage] = useState(1)
    const [blogsCount, setBlogsCount] = useState(1)
    const {searchTerm, setSearchTerm} = useContext(SearchTermContext);
    
    const sortOldestQuery = `ordering=published_at`
    const sortNewestQuery = `ordering=-published_at`
    const searchQuery= `search=${searchTerm}`
  
    console.log(searchTerm)
  
    useEffect(() => {
      if (searchTerm !== ''){
        setApi(BASE_URL+'&search='+searchTerm)
        setPage(1)
        setSearchTerm('')
      }
    }, [searchTerm, setSearchTerm])
  
    
    
    useEffect(() => {
      console.log('RUNNING USEEFFECT')  
    
      
      async function fetchBlogs() {
        try {
          setLoading(true)
          console.log('FETCHING: ' + api)  
          const response = await fetch(`${api}`);
          const data = await response.json()
         
          setBlogsCount(data.count)
          console.log('This fetch returned '+data.count+' blog pieces.')
          setNext(data.next)
          setPrevious(data.previous)
          setBlogs(data.results);
         
          
            
        } catch (e) {
          setError(e);
          if (error !== null) { console.log(error.message) }
        } finally {
          setLoading(false)
        }
        
      }
      fetchBlogs()
      
        
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
        <div className="row mb-2 justify-content-center gx-0">
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
            <div className='loadingContainer container-fluid text-center justify-content-center'>
            <h1> LOADING ... </h1>
            </div>
          ) : blogsCount !== 0 ? (
              blogs.map((post) => (
                  <BlogPost
                  key={post.id}
                  date={post.published_at}
                  title={post.title}
                  url={post.url}
                  image_url={post.image_url}
                  summary={post.summary}
                  publisher={post.news_site}
                  />
                  ))
                  ) : (
                      <h3 className="text-center">No results found</h3>
                      )}
      </div>
  );
}