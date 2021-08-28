import {Button,Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {CgComment} from 'react-icons/cg'
import {IoLinkOutline} from 'react-icons/io5'
import {MdSubtitles} from 'react-icons/md'
import {GiSandsOfTime} from 'react-icons/gi'
import {HiUserCircle} from 'react-icons/hi'
import {GoCommentDiscussion} from 'react-icons/go'

export const Article = ({news,loading}) => {
    const {url,title,time,by,kids,descendants} = news
    console.log('article n',news)
    return(
    <>
            <Card>
  <Card.Header as="h5"> <MdSubtitles/>{title}</Card.Header>
  <Card.Body>
    <Card.Text ><IoLinkOutline/> {url}</Card.Text>
    <Card.Text>
    <GiSandsOfTime/>Date: { new Date(time*1000).toString()}
    </Card.Text>
    <Card.Text className="fst-italic">
    <HiUserCircle/> {by}
    </Card.Text>
    <Card.Text>
       <CgComment/> {descendants}
    </Card.Text>
    <Card.Text>
        <GoCommentDiscussion/>{kids}
    </Card.Text>
  </Card.Body>
</Card>
            <Button>Update comments</Button>
            <Button><Link to="/" className="text-light text-decoration-none">Back</Link></Button>
    </>
    )
}