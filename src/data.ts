import { ICartState, IProductsState } from './types'
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
        {
            typeId: 2,
            typeName: 'weapons',
            productId: 333,
            productName: 'sword',
            price: 777,
            standart: 'YUYUY-53',
        },
    ]

}
export const currentCart: ICartState = {
    products: [
        // {
        //     typeId: 1,
        //     typeName: 'plants',
        //     productId: 34,
        //     productName: 'rose',
        //     price: 777,
        //     standart: 'RTEB-583',
        //     count: 1,
        // },
    ],
}

export const typesData: ITypesState = {

    productTypes: [
        {
            typeId: 1,
            typeName: 'plants',
        },
        {
            typeId: 2,
            typeName: 'weapons',
        },
    ]

}


