import {Card} from 'react-bootstrap'
import {Link,useParams} from "react-router-dom"
import {useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { CgDisplaySpacing } from 'react-icons/cg'
import { fetchAnswers } from '../store/reducers/answers'
import { HiUserCircle } from 'react-icons/hi'
import {BsChatQuoteFill} from 'react-icons/bs'

export const Comments = ({kids}) => {
const {answers} = useSelector(state => state.answers)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(fetchAnswers(kids))
},[])
    return (
        <>
            <Card.Text>
                {answers.map(a=> 
                    <div key={a.id}><HiUserCircle/>{a.by} <div>- {a.text}</div></div>
                )}
            </Card.Text>
        </>
    )
}