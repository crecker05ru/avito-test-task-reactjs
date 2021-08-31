import { Button, Card ,Spinner} from 'react-bootstrap'
import { CgComment } from 'react-icons/cg'
import { GiSandsOfTime } from 'react-icons/gi'
import { HiUserCircle } from 'react-icons/hi'
import { IoLinkOutline } from 'react-icons/io5'
import { MdSubtitles } from 'react-icons/md'
import { useDispatch ,useSelector} from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { Comments } from './comments'
import {fetchComments} from '../store/reducers/commentsReducer'
import {useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import { updateComments } from './../store/reducers/commentsReducer';
import { fetchAnswers } from '../store/reducers/answers'
import {Answer} from '../component/answer'


export const Article = ({news}) => {
    const {url,title,time,by,kids,descendants} = news
    const {comments,loading} = useSelector(state => state.comments)
   //  const {answers} = useSelector(state => state.answers)
    const [showAnswers,setShowAnswers] = useState(false)
    console.log('comments',comments)
    const dispatch = useDispatch()
    console.log('Comments loading',loading)
    console.log("kids article to answers",kids)
   //  console.log('answers in comments',answers)

   //  const loadAnswers = (answer) => {
   //    dispatch(fetchAnswers(answer))
   //    setShowAnswers(!showAnswers)
   // }

   const showAnswer = () => {
      setShowAnswers(!showAnswers)
   }
   // useEffect(() => {
   //    dispatch(fetchAnswers())
   // })

   // console.log('showAnswers',showAnswers)

   //  useEffect(()=> {
   //    loadAnswers()
   //  },[])

useEffect(()=> {
       dispatch(fetchComments(kids))
    },[])


    const update = () =>{
       dispatch(updateComments(kids))
    } 
  
    
   //  console.log('article n',news)
   //  if(loading){
   //     return <Spinner animation="border" role="status"></Spinner>
   //  }
    return(
    <> 
    {loading 
    ?  <Spinner animation="border" role="status"></Spinner>
    : <div><Card>
    <Card.Header as="h5"> <MdSubtitles/>{title}</Card.Header>
    <Card.Body>
       <Card.Text ><IoLinkOutline/> {!url ? "No URL" : <a href={url}>{url}</a>}</Card.Text>
       <Card.Text>
       <GiSandsOfTime/>Date: { new Date(time*1000).toString()}
       </Card.Text>
       <Card.Text className="fst-italic">
       <HiUserCircle/> {by}
       </Card.Text>
       <Card.Text>
          <CgComment/> {descendants == 0 ? <div className="fst-italic">No comments</div> : 
          <>
             {descendants}

             {comments.map(c => 
                <div key={c.id} className={"mt-2"}><HiUserCircle/>  {c.by} <div className={"mt-1"}>- {c.text}</div> 
                   {!c.kids ? "No answers" 
                   :
                   <p>
                      {/* <Link to={`/comments/${c.kids}`}> Load answers </Link>
                   <Route path="/comments/:id?" exact>
                      <Comments kids={c.kids}/><Link to={`/comments/${c.kids}`}> Load answers </Link>
                   </Route> */}
                  <Comments kids={c.kids} commentId={c.id}></Comments>
                   {!showAnswers ? <>  
                     
                    </> 
                   : <div>
                      <Button variant="link" className="text-decoration-none" onClick={showAnswer}>Hide answers</Button>
                      
                      </div>
                   }
                   
                   </p>
                   }
                </div>
                
             )}
             <Route path="/comments/:id?" exact>
                <Comments />
             </Route>
          </>
          }
       </Card.Text>
       
    </Card.Body>
    </Card>
     
   
    <Button onClick={update}>Update comments</Button>
    
    <Button><Link to="/" className="text-light text-decoration-none">Back</Link></Button>
    </div>
    }
               
    </>
    )
}