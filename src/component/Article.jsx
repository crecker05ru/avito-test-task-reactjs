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
import {useEffect} from 'react'
import {useParams} from "react-router-dom"
import { updateComments } from './../store/reducers/commentsReducer';


export const Article = ({news}) => {
    const {url,title,time,by,kids,descendants} = news
    const {comments,loading} = useSelector(state => state.comments)
    console.log('comments',comments)
    const dispatch = useDispatch()
    console.log('Comments loading',loading)
    
    useEffect(()=> {
       dispatch(fetchComments(kids))
    },[])

    const update = () =>{
       dispatch(updateComments(kids))
       console.log("click")
    } 
    console.log('article n',news)
   //  if(loading){
   //     return <Spinner animation="border" role="status"></Spinner>
   //  }
    return(
    <> 
            <Card>
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
       <CgComment/> {descendants == 0 ? <p>No comments</p> : 
       <>
          {descendants}
          {comments.map(c => 
             <div key={c.id}><HiUserCircle/>{c.by} <div>- {c.text}</div> 
               {!c.kids ? "No answers" 
               :
               <p>answers 
               <Route path="/comments/:id?" exact>
                  <Comments answers={c.kids}/><Link to={`/comments/${c.kids}`}> Load answers </Link>
               </Route>
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
    </>
    )
}