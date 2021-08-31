import {Card} from 'react-bootstrap'
import {FaRegStar} from 'react-icons/fa'
import {GrArticle} from 'react-icons/gr'
import {HiUserCircle} from 'react-icons/hi'
import {BsFillClockFill} from 'react-icons/bs'
import {FaHashtag} from 'react-icons/fa'

import { Route,Link } from 'react-router-dom';
import { Article } from './Article';

export const NewsCard = ({news,ind}) => {
  const {by,descendants,id,score,time,title,type,url} = news
  // console.log(ind,'ind')
  // console.log(news)
    return (
        <>
       <Card className="text-center" border="dark" >
  <Card.Header>{ind+1}  <FaHashtag/>   | Rating {score} <FaRegStar/></Card.Header>
  <Card.Body>
    <Card.Title><GrArticle/> | <Link to={`/article/${id}`} className="text-decoration-none">{title}</Link></Card.Title>
    <Card.Text>
      <HiUserCircle/> {by}
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"> <BsFillClockFill/> { new Date(time*1000).toString()}</Card.Footer>
</Card>
        </>
    )
}