import axios from "axios"

const FETCH_COMMENTS = "FETCH_COMMENTS"
const CLEAR_COMMENTS = "CLEAR_COMMENTS"
const FETCH_START = "FETCH_START"
const FETCH_DONE = "FETCH_DONE"

const initialState= {
    comments : [],
    loading : false
}

export const commentsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {...state,loading: true}         
        case CLEAR_COMMENTS:
            return {...state,comments:[]}  
        case FETCH_COMMENTS:
            return {...state,comments: action.payload,loading: true}
        case FETCH_DONE:
            return {...state,loading: false} 
        default:
            return state
    }
}
export const fetchComments = (kids) => async (dispatch) => {
    console.log('fetchcomments',kids)
    try{
        dispatch({type: FETCH_START})
        let result = []
        for(let i = 0;i < kids.length;i++){
        const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json?print=pretty`)
            result.push(data)
            }
        // response.data.slice(10)
        dispatch({type: FETCH_COMMENTS,payload: result})
        dispatch({type: FETCH_DONE})
    }catch(e){

    }
}
export const updateComments = (kids) => async (dispatch) => {
    console.log('fetchcomments',kids)
    try{
        dispatch({type: FETCH_START})
        dispatch({type: CLEAR_COMMENTS})
        let result = []
        for(let i = 0;i < kids.length;i++){
        const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json?print=pretty`)
            result.push(data)
            }
        // response.data.slice(10)
        dispatch({type: FETCH_COMMENTS,payload: result})
        dispatch({type: FETCH_DONE})
    }catch(e){

    }
}