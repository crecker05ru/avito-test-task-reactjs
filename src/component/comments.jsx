import {Card} from 'react-bootstrap'
import {Link,useParams} from "react-router-dom"
import {useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { CgDisplaySpacing } from 'react-icons/cg'
import { fetchAnswers } from '../store/reducers/answers'
import { HiUserCircle } from 'react-icons/hi'
import {BsChatQuoteFill} from 'react-icons/bs'
import {Answer} from '../component/answer'

export const Comments = ({kids,commentId}) => {
const {answers} = useSelector(state => state.answers)
const dispatch = useDispatch()
// console.log('kids in comments',kids)

// useEffect(()=>{
//     dispatch(fetchAnswers(kids))
// },[])

const loadAnswers = (kids) => {
      dispatch(fetchAnswers(kids))
    //   setShowAnswers(!showAnswers)
}


// console.log("answer in comments",answers)
    return (
        <>  
            <Answer value={kids} onComponentClick={loadAnswers} id={answers.id}/>{console.log('kids',kids)}
            
            {/* {console.log("map answers",answers.filter(a=> a.parent == commentId ) )} */}
        {answers.filter(a=> a.parent == commentId ).map(a =>  <div key={a.id}><Card border="dark" style={{ width: '40rem' }} className={"ms-5 mt-2"}>
            <Card.Text>
                
                    <div ><HiUserCircle/>{a.by} <div>- {a.text}</div></div>
                
            </Card.Text>
            </Card>
            </div>
            )}
        </>
    )
}