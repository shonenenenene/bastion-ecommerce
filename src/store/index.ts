import { createStore, combineReducers } from 'redux'; 
import { typesReducer } from './reducers';
import { productsReducer } from './reducers';


const rootReducer = combineReducers({
    typesReducer: typesReducer,
    productsReducer: productsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



