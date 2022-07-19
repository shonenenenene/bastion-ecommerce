import { typesData } from '../data'
import { ITypesState } from '../types'
import { productsData } from '../data'
import { IProductsState } from '../types'
import { IUserAction } from '../types'
import { TypeActions } from './actions'



export const typesReducer = (state = typesData, action: IUserAction): ITypesState => {
    switch (action.type) {
        case TypeActions.ADD_TYPE:
            return { ...state, productTypes: [...state.productTypes, action.payload]}
        default:
            return state
    }
}

export const productsReducer = (state = productsData, action: IUserAction): IProductsState => {
    switch (action.type) {
        case TypeActions.ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload]}
        default:
            return state
    }
}

