import axios from "axios"

const FETCH_START = "FETCH_START"
const FETCH_NEWS = "FETCH_NEWS"
const FETCH_DONE = "FETCH_DONE"
const CLEAR_NEWS = "CLEAR_NEWS"

const initialState = {
    news: [
        // {
        //     "by": "devnull3",
        //     "descendants": 3,
        //     "id": 28354257,
        //     "kids": [
        //     28354272,
        //     28354347
        //     ],
        //     "score": 1,
        //     "time": 1630318527,
        //     "title": "Dirty Harry on feminism and women's quotas [video]",
        //     "type": "story",
        //     "url": "https://www.youtube.com/watch?v=9rcIJIWqYmo"
        //     },
        //     {
        //         "by": "7402",
        //         "descendants": 13,
        //         "id": 28356638,
        //         "kids": [
        //         28357312,
        //         28357237,
        //         28357051,
        //         28356977
        //         ],
        //         "score": 44,
        //         "time": 1630337497,
        //         "title": "FCC Temporary Waiver Permits Higher Symbol Rate Data for Hurricane Ida Traffic",
        //         "type": "story",
        //         "url": "http://www.arrl.org/news/view/fcc-grants-temporary-waiver-to-permit-higher-symbol-rate-data-transmissions-for-hurricane-ida-traffi"
        //         },{
        //             "by": "dhouston",
        //             "descendants": 71,
        //             "id": 8863,
        //             "kids": [
        //             9224,
        //             8917,
        //             8952,
        //             8958,
        //             8884,
        //             8887,
        //             8869,
        //             8940,
        //             8908,
        //             9005,
        //             8873,
        //             9671,
        //             9067,
        //             9055,
        //             8865,
        //             8881,
        //             8872,
        //             8955,
        //             10403,
        //             8903,
        //             8928,
        //             9125,
        //             8998,
        //             8901,
        //             8902,
        //             8907,
        //             8894,
        //             8870,
        //             8878,
        //             8980,
        //             8934,
        //             8943,
        //             8876
        //             ],
        //             "score": 104,
        //             "time": 1175714200,
        //             "title": "My YC app: Dropbox - Throw away your USB drive",
        //             "type": "story",
        //             "url": "http://www.getdropbox.com/u/2/screencast.html"
        //             }
    ],
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
        case CLEAR_NEWS:
            return {...state,news:[]}
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
    try{
    dispatch({type: FETCH_START})
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
    let result = []

    // console.log('newsCount',newsCount)
    let current = newsCount.length
    let nextCount = current  + 20
    // console.log('count',nextCount)
    
        for(let k = current;k < nextCount; k++){
            const {data} = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[k]}.json?print=pretty`)
            result.push(data)
            // console.log('result.data',...result)
        }
        dispatch({type: FETCH_NEWS,payload: result})
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
            // console.log('data',response.data)
            let result = []
            // console.log('result',result)
            // console.log('result.data',...result)
            for (let i = 0; i < 20;i++){
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

export const updateNews = () => {
    return async (dispatch) => {
        try{
            dispatch({type: CLEAR_NEWS})
            dispatch({type: FETCH_START})
            const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
            console.log('data',response.data)
            let result = []
            // console.log('result',result)
            // console.log('result.data',...result)
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