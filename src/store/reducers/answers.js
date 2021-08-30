import axios from "axios"

const FETCH_ANSWERS = "FETCH_ANSWERS"
const CLEAR_ANSWERS = "CLEAR_ANSWERS"
const FETCH_START = "FETCH_START"
const FETCH_DONE = "FETCH_DONE"

const initialState= {
    answers : [
        // {
        //     "by": "afpx",
        //     "id": 28355498,
        //     "parent": 28354272,
        //     "text": "How&#x27;s she supposed to get a misdemeanor or felony arrest if cops like Harry keep her at her desk?",
        //     "time": 1630330530,
        //     "type": "comment"
        //     },
        // {
        //     "by": "eesmith",
        //     "id": 28354373,
        //     "parent": 28354272,
        //     "text": "It looked liked a fairly straight-forward example of how systemic sexism forced a female officer who wanted to be on street duty into record keeping.<p>If time on the 100 yard dash were that important to policing, it would be part of the physical requirements - requirements that the woman would have had to pass in order to get to this stage in the interview process.<p>For example, <a href=\"https:&#x2F;&#x2F;www.uscp.gov&#x2F;police-officer-training-preparing-physical-abilities-test\" rel=\"nofollow\">https:&#x2F;&#x2F;www.uscp.gov&#x2F;police-officer-training-preparing-physi...</a> says their Physical Abilities Test - which includes a 375 slalom run - must be finished in 3m52s and &quot;The time is the same for both males and females regardless of age.&quot;<p>Recall too that Kathrine Switzer was assaulted in 1967 for being a woman running in the Boston Marathon. Women at the time were deemed &quot;physiologically incapable&quot; or &quot;too fragile&quot; to run a marathon.<p>That&#x27;s only 4 years before Dirty Harry came out, and would have definitely been part of general cultural awareness. Note that the portrayed candidate would have started on the force even before Switzer&#x27;s real-life run.<p>Also, you&#x27;ll notice there was a men&#x27;s quota too - <i>5 men</i> and 3 women.",
        //     "time": 1630320331,
        //     "type": "comment"
        //     }
    ],
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
            return {...state,answers: action.payload,loading: true}
        default:
            return state
    }
}
export const fetchAnswers = (kids) => async (dispatch) => {
    console.log('fetchcommentstoanswers',kids)
    try{
        // dispatch({type: FETCH_START})
        let result = []
        console.log('result answers',result)
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