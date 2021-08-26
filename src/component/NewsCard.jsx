import {Card,Button} from 'react-bootstrap';
import {Link} from "react"

export const NewsCard = ({news}) => {
  const {by,descendants,id,score,time,title,type,url} = news
  console.log(news)
    return (
        <>
       <Card className="text-center" border="dark" >
  <Card.Header>Rating {score}</Card.Header>
  <Card.Body>
    <Card.Title><a href={url}>{title}</a></Card.Title>
    <Card.Text>
      By {by}
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">{ new Date(time*1000).toString()}</Card.Footer>
</Card>
        </>
    )
}