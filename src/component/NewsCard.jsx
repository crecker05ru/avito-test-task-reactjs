import {Card,Button} from 'react-bootstrap'
import {Link} from "react"
import {FaRegStar} from 'react-icons/fa'
import {GrArticle} from 'react-icons/gr'
import {HiUserCircle} from 'react-icons/hi'
import {BsFillClockFill} from 'react-icons/bs'

export const NewsCard = ({news}) => {
  const {by,descendants,id,score,time,title,type,url} = news
  console.log(news)
    return (
        <>
       <Card className="text-center" border="dark" >
  <Card.Header>Rating {score} <FaRegStar/></Card.Header>
  <Card.Body>
    <Card.Title><GrArticle/> | <a href={url}>{title}</a></Card.Title>
    <Card.Text>
      <HiUserCircle/> {by}
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"> <BsFillClockFill/> { new Date(time*1000).toString()}</Card.Footer>
</Card>
        </>
    )
}