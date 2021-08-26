import axios from "axios"

const FETCH_NEWS = "FETCH_NEWS"

const initialState = {
    news: [],
    loading: false
}

export const newsPageReduser = (state = initialState,action) => {
    switch (action.type){
        case FETCH_NEWS:
            return {...state,news: action.payload}
        default:
            return state
    }
}

export const fetchNews = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
            console.log('data',response.data)
            let result = []
            console.log('result',result)
            console.log('result.data',...result)
            for (let i = 0; i < 100;i++){
                const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                result.push(data)
            }
            dispatch({type:FETCH_NEWS,payload: result})
        }catch(e){

        }
    }
}