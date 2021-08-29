import { newsPageReduser } from "./newsPageReducer";
import { articlePageReducer } from "./articlePageReducer";
import { combineReducers } from "redux";
import { commentsReducer } from './commentsReducer';
import { answersReducer } from './answers';

export const rootReducer = combineReducers({
    news: newsPageReduser,
    article: articlePageReducer,
    comments: commentsReducer,
    answers: answersReducer
})
