import './App.css';
import {useDispatch,useSelector} from "react-redux"
import { fetchNews, fetchNextNews } from './store/reducers/newsPageReducer';
import {Button,Spinner} from 'react-bootstrap';
import { NavigationBar } from './component/navigationBar';
import {useEffect} from 'react'
import {Route} from "react-router-dom"
import { MainPage } from './Pages/MainPage';
import { ArticlePage } from './Pages/ArticlePage';

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
  },[])
// if(news.length < 1){
//   return <Spinner animation="border" role="status">
//   <span className="visually-hidden">Loading...</span>
// </Spinner>
// }
  return (
    <div className="App">
      <NavigationBar/>  
      <MainPage news={news}/>  
     
      <ArticlePage news={news}/>        
    </div>
  );
}

export default App;
