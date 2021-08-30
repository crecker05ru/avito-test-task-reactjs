
import {Button,Spinner} from 'react-bootstrap';
import { NewsCard } from '../component/NewsCard';
import {useEffect} from 'react'
export const MainPage =({news,loading,fetchNext,update}) => {
    console.log('news',news)
    console.log('MainPage loading',loading)
// const dispatch = useDispatch()
// const {news,loading} = useSelector((state => state.news))
// console.log('news',news)

// // const fetch =() => {
// //   dispatch(fetchNews())
// // }

// const fetchNext = () => {
//   console.log("click")
//   dispatch(fetchNextNews(news))
// }
// useEffect(() => {
//   dispatch(fetchNews())
//   },[])
    return (
        <>
        <div className="d-grid gap-2">
         <Button onClick={update} variant="outline-dark">Update News</Button>
        </div>
            
                  { news.map(
        (n , index)=> <NewsCard key={n.id} news={n} ind={index}/>
      )}
      {console.log('news.length',news.length)}
      {loading ? <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> 
: <div className="d-grid gap-2">
<Button onClick={fetchNext} variant="outline-dark">Next</Button>
</div>}
        </>
    )
}