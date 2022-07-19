import { createStore, combineReducers } from 'redux'; 
import { typesReducer } from './reducers';


const rootReducer = combineReducers({
    typesReducer: typesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



