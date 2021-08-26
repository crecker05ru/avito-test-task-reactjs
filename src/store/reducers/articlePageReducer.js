const FETCH_ARTICLE = "FETCH_ARTICLE"

const initialState = {
    article: [],
    loading: false
}

export const articlePageReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_ARTICLE:
            return {...state,news: action.payload}
        default:
            return state
    }
}