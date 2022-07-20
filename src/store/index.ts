import { createStore, combineReducers } from 'redux'; 
import {typesReducer, productsReducer, currentItemsReducer } from './reducers';



const rootReducer = combineReducers({
    typesReducer: typesReducer,
    productsReducer: productsReducer,
    currentItemsReducer: currentItemsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



