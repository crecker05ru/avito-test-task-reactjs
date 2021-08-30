import axios from "axios"

const FETCH_COMMENTS = "FETCH_COMMENTS"
const CLEAR_COMMENTS = "CLEAR_COMMENTS"
const FETCH_START = "FETCH_START"
const FETCH_DONE = "FETCH_DONE"

const initialState= {
    comments : [
        // {
        //     "by": "devnull3",
        //     "id": 28354272,
        //     "kids": [
        //     28354373
        //     ],
        //     "parent": 28354257,
        //     "text": "I stumbled on this in my YT feed. Dirty Harry was 70s movie and was amazed to see the topic of diversity&#x2F;gender hiring in the movie.<p>The lady in pink is monitoring to ensure &quot;fair&quot; evaluation .. lol.<p>Also at 02:52 the lady says &quot;are you saying women&#x27;s place is in the home?&quot;. This clearly not what Harry was saying but it was interpreted to the other extreme. Reminds me of today&#x27;s situation.<p>I am not white. But hiring for the sake of diversity alone is not a step in right direction.<p>PS: I have kept the title same as the video&#x27;s",
        //     "time": 1630318731,
        //     "type": "comment"
        //     }
    ],
    loading : false
}

export const commentsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {...state,loading: true}         
        case CLEAR_COMMENTS:
            return {...state,comments:[]}  
        case FETCH_COMMENTS:
            return {...state,comments: action.payload,loading: false}
        case FETCH_DONE:
            return {...state,loading: false} 
        default:
            return state
    }
}
export const fetchComments = (kids) => async (dispatch) => {
    console.log('fetchcomments',kids)
    try{
        // dispatch({type: FETCH_START})
        let result = []
        for(let i = 0;i < kids.length;i++){
        const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json?print=pretty`)
            result.push(data)
            }
            if(!kids){
                dispatch({type: FETCH_DONE})  
                console.log('dispatch({type: FETCH_DONE})  ')
            }else{
                dispatch({type: FETCH_COMMENTS,payload: result})
                console.log("dispatch({type: FETCH_COMMENTS,payload: result})")
            }
        // dispatch({type: FETCH_DONE})
    }catch(e){

    }
}
export const updateComments = (kids) => async (dispatch) => {
    dispatch({type: FETCH_START})
    console.log('fetchcomments kids',kids)
    console.log("!kids",!kids) 
    if(!kids){
        dispatch({type: FETCH_DONE})  
        console.log('dispatch({type: FETCH_DONE})  ')
    }
    try{
        // dispatch({type: FETCH_START})
        dispatch({type: CLEAR_COMMENTS})
        let result = []
        console.log('result',result)
        for(let i = 0;i < kids.length;i++){
        const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json?print=pretty`)
            result.push(data)
            }
        
        if(kids.length >= 1){
            dispatch({type: FETCH_COMMENTS,payload: result})
            console.log("dispatch({type: FETCH_COMMENTS,payload: result})")
        }
                              
    }catch(e){

    }
}