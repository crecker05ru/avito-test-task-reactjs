import {Card} from 'react-bootstrap'
import {Link,useParams} from "react-router-dom"
import {useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { CgDisplaySpacing } from 'react-icons/cg'
import { fetchAnswers } from '../store/reducers/answers'
import { HiUserCircle } from 'react-icons/hi'
import {BsChatQuoteFill} from 'react-icons/bs'

export const Comments = ({answers}) => {
// const {answers} = useSelector(state => state.answers)
// const dispatch = useDispatch()
// console.log('answers in comments',answers)

// useEffect(()=>{
//     dispatch(fetchAnswers(kids))
// },[])
console.log("answer in comments",answers)
    return (
        <>  {answers.map(a =>  <div key={a.id}><Card border="dark" style={{ width: '40rem' }} className={"ms-5 mt-2"}>
            <Card.Text>
                
                    <div ><HiUserCircle/>{a.by} <div>- {a.text}</div></div>
                
            </Card.Text>
            </Card>
            </div>
            )}
        </>
    )
}