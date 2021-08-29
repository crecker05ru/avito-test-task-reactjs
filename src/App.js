import './App.css';
import {useDispatch,useSelector} from "react-redux"
import { fetchNews, fetchNextNews,updateNews } from './store/reducers/newsPageReducer';
import {Button,Spinner} from 'react-bootstrap';
import { NavigationBar } from './component/navigationBar';
import {useEffect} from 'react'
import {Route,Switch,Redirect} from "react-router-dom"
import { MainPage } from './Pages/MainPage';
import { ArticlePage } from './Pages/ArticlePage';
import { FooterBar } from './component/footerBar';

function App() {
const dispatch = useDispatch()
const {news,loading} = useSelector((state => state.news))
// console.log('news',news)

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

  const update = () =>{
    dispatch(updateNews())
  }
  // setInterval(dispatch(fetchNews),1000*60)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(updateNews())
  //   }, 1000*60);
  //   return () => clearInterval(interval);
  // }, []);
  
// if(news.length < 1){
//   return <Spinner animation="border" role="status">
//   <span className="visually-hidden">Loading...</span>
// </Spinner>
// }
  return (
    <div className="App">
      
      <NavigationBar/>  
      <Switch>
        <Route path="/" exact>
          <MainPage news={news} fetchNext={fetchNext} loading={loading} update={update}/>  
        </Route>
        <Route path="/article/:id?" exact>
          <ArticlePage news={news} loading={loading}/> 
      </Route>
      <Redirect to="/" />
      </Switch>       
      <FooterBar />
    </div>
  );
}

export default App;
