import './App.css';
import {useDispatch,useSelector} from "react-redux"
import { fetchNews } from './store/reducers/newsPageReducer';
import {Button,Spinner} from 'react-bootstrap';
import { NavigationBar } from './component/navigationBar';
import { NewsCard } from './component/NewsCard';

function App() {
const dispatch = useDispatch()
const {news} = useSelector((state => state.news))
console.log('news',news)
const fetch =() => {
  dispatch(fetchNews())
}
if(!news){
  return <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
}
  return (
    <div className="App">
      <NavigationBar/>
      <Button variant="primary" onClick={fetch}>Fetch</Button>
      {news.map(
        n => <NewsCard news={n}/>
      )}
       
       
    </div>
  );
}

export default App;
