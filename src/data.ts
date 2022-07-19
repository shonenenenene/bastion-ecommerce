import { IProductsState } from './types'
import { ITypesState } from './types'

export const productsData: IProductsState = {

    products: [
        {
            typeId: 1,
            typeName: 'plants',
            productId: 34,
            productName: 'rose',
            price: 777,
            standart: 'RTEB-583',
        },
    ]

}


export const typesData: ITypesState = {

    productTypes: [
        {
            typeId: 1,
            typeName: 'plants',
        },
        {
            typeId: 2,
            typeName: 'weapon',
        },
    ]

}
