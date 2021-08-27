import axios from "axios"

const FETCH_START = "FETCH_START"
const FETCH_NEWS = "FETCH_NEWS"
const FETCH_DONE = "FETCH_DONE"

const initialState = {
    news: [],
    loading: false
}

export const newsPageReduser = (state = initialState,action) => {
    switch (action.type){
        case FETCH_START:
            return {...state,loading: true}
        case FETCH_NEWS:
            return {...state,news: [...state.news,...action.payload],loading: true}
        case FETCH_DONE:
                return {...state,loading: false}
        default:
            return state
    }
}

// const fetchNextNews = (newsIds) => async (dispatch) => {
//     let result = []
//     try{
//         for(let k = 0;k < 10; k++){
//             const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsIds[k]}.json?print=pretty`)
//             result.push(data)
//         }
//         newsIds.slice(10)
//     }catch(e){
//         console.log(e)
//     }
// }

export const fetchNextNews = (newsCount) => async (dispatch) => {   
    dispatch({type: FETCH_START})
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
    let result = []

    console.log('newsCount',newsCount)
    let current = newsCount.length
    let nextCount = current  + 10
    console.log('count',nextCount)
    try{
        for(let k = current;k < nextCount; k++){
            const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[k]}.json?print=pretty`)
            result.push(data)
            console.log('result.data',...result)
        }
        dispatch({type:FETCH_NEWS,payload: result})
        dispatch({type: FETCH_DONE})
    }catch(e){
        console.log(e)
    }
}

export const fetchNews = () => {
    return async (dispatch) => {
        try{
            dispatch({type: FETCH_START})
            const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
            console.log('data',response.data)
            let result = []
            console.log('result',result)
            console.log('result.data',...result)
            for (let i = 0; i < 10;i++){
                const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                result.push(data)
            }
            // response.data.slice(10)
            dispatch({type:FETCH_NEWS,payload: result})
            dispatch({type: FETCH_DONE})
        }catch(e){

        }
    }
}