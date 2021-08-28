import {Button,Spinner} from 'react-bootstrap';

export const Article = ({news}) => {
    const  {by,descendants,id,score,time,title,type,url,kids}  = news
    console.log('props',news)
    return(
    <>
        {url}
        {title}
        { new Date(time*1000).toString()}
        {by}
        {/* {kids.length} */}
        {kids}
        <Button>Update comments</Button>
        <Button>Back</Button>
    </>
    )
}