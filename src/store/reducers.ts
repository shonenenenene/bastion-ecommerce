import { typesData } from '../data'
import { ICartState, ITypesState } from '../types'
import { productsData, currentCart } from '../data'
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

export const cartReducer = (state = currentCart, action: IUserAction): ICartState => {
        switch (action.type) {
            case TypeActions.ADD_TO_CART:
                return { ...state, products: [...state.products, action.payload] }
            case TypeActions.DELETE_FROM_CART:
                return {
                    ...state, products: state.products.filter((e) => e.productId !== action.payload.productId)
                }
            case TypeActions.CLEAR_SKY:
                return {
                    ...state, products: currentCart.products
                }
            case TypeActions.COUNT_CHANGE:
                return {
                    ...state, products: state.products.map((e) => {
                        if (e.productId === action.payload.productId) {
                            e.count = action.payload.count
                        }
                        return e
                    })
                }

        default:
            return state
    }
}

// state.products.map((e) => {
//                         if (e.productId === action.payload.productId) e.count = action.payload.count
//                         return e
//                     })

