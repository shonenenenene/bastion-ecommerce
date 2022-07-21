import { createStore, combineReducers } from 'redux'; 
import {typesReducer, productsReducer, cartReducer} from './reducers';



const rootReducer = combineReducers({
    typesReducer: typesReducer,
    productsReducer: productsReducer,
    cartReducer: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



