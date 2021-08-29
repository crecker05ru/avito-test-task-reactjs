import axios from "axios"

const FETCH_ANSWERS = "FETCH_ANSWERS"
const CLEAR_ANSWERS = "CLEAR_ANSWERS"
const FETCH_START = "FETCH_START"
const FETCH_DONE = "FETCH_DONE"

const initialState= {
    answers : [],
    loading : false
}

export const answersReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {...state,loading: true}
        case FETCH_DONE:
            return {...state,loading: false}  
        case CLEAR_ANSWERS:
            return {...state,answers:[]}  
        case FETCH_ANSWERS:
            return {...state,comments: [...state.answers,...action.payload],loading: true}
        default:
            return state
    }
}
export const fetchAnswers = (kids) => async (dispatch) => {
    console.log('fetchcomments',kids)
    try{
        dispatch({type: FETCH_START})
        let result = []
        for(let i = 0;i < kids.length;i++){
        const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json?print=pretty`)
            result.push(data)
            }
        // response.data.slice(10)
        dispatch({type:FETCH_ANSWERS,payload: result})
        dispatch({type: FETCH_DONE})
    }catch(e){

    }
}