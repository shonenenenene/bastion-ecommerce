import { createStore, combineReducers } from 'redux'; 
import { typesReducer } from './reducers';


const rootReducer = combineReducers({
    typesReducer: typesReducer,
})

export const store = createStore(rootReducer)



