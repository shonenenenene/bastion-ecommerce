import { typesData } from '../data'
import { ITypesState } from '../types'
import { IProductType } from '../types'
import { productsData } from '../data'
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

