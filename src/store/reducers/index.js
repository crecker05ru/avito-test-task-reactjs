import { newsPageReduser } from "./newsPageReducer";
import { articlePageReducer } from "./articlePageReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    news: newsPageReduser,
    article: articlePageReducer
})
