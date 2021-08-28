
import {Button,Spinner} from 'react-bootstrap';
import { NewsCard } from '../component/NewsCard';
import {useEffect} from 'react'
export const MainPage =({news,loading,fetchNext,update}) => {
    console.log('loading',news)
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
            <Button onClick={update}>Update News</Button>
                  { news.map(
        (n , index)=> <NewsCard key={n.id} news={n} ind={index}/>
      )}
      {console.log('news.length',news.length)}
      {loading ? <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> : <Button variant="primary" onClick={fetchNext}>Next</Button>}
        </>
    )
}