import { Article } from "../component/Article"
import {useParams} from "react-router-dom"

export const ArticlePage =({news,loading}) => {

    const {id} = useParams()
    
    return (
        <>
        
                              { news.filter(n => n.id == id)  ?
                              news.filter(n => n.id == id).map(
        (n , index)=> <Article  key={id} news={n} ind={index}/>
        
      )
      : <h2>Nothing</h2>}
        </>
    )
}