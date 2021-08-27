import './App.css';
import {useDispatch,useSelector} from "react-redux"
import { fetchNews, fetchNextNews } from './store/reducers/newsPageReducer';
import {Button,Spinner} from 'react-bootstrap';
import { NavigationBar } from './component/navigationBar';
import { NewsCard } from './component/NewsCard';
import {useEffect} from 'react'

function App() {
const dispatch = useDispatch()
const {news,loading} = useSelector((state => state.news))
console.log('news',news)

// const fetch =() => {
//   dispatch(fetchNews())
// }

const fetchNext = () => {
  console.log("click")
  dispatch(fetchNextNews(news))
}
useEffect(() => {
  dispatch(fetchNews())
  }, [])
// if(news.length < 1){
//   return <Spinner animation="border" role="status">
//   <span className="visually-hidden">Loading...</span>
// </Spinner>
// }
  return (
    <div className="App">
      <NavigationBar/>
      { news.map(
        (n , index)=> <NewsCard news={n} ind={index}/>
      )}
      {console.log('news.length',news.length)}
      {loading ? <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> : <Button variant="primary" onClick={fetchNext}>Fetch</Button>}
       
       
    </div>
  );
}

export default App;
