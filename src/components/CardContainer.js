import { useEffect, useState } from 'react';
import Card from './Card'



function CardContainer() {

    const [news, setNews] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      async function fetchNews() {
        try {
          console.log('RUNNING USEEFFECT')  
          setLoading(true)
          console.log('FETCHING')  
          const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/`);
          console.log(response)
          const data = await response.json()
          console.log(data)
          setNews(data.results);
          
        } catch (e) {
          setError(e);
          if (error !== null) { console.log(error.message)}
        } finally {
            setLoading(false)
        }

      }
      fetchNews()
      

    },[]);

   

    return (
        <div id='cardContainer' className="row gy-2 gx-0 text-white justify-content-evenly">
            {loading ? <h1> LOADING ... </h1> :
            news.map((card) => (
                <Card 
                    id={card.id}
                    title={card.title}
                    url={card.url}
                    image_url={card.image_url}
                    summary={card.summary} />
            ))}
           
            
        </div>
    )
}

export default CardContainer;