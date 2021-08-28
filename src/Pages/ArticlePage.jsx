import { Article } from "../component/Article"

export const ArticlePage =({news}) => {
    return (
        <>
            <Article news={news}/>
        </>
    )
}