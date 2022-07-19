import { IProduct } from './types'
import { IProductType } from './types'
import { ITypesState } from './types'

export const productsData: IProduct[] = [
    {
    typeId: 1,
    typeName: 'plants',
    productId: 34,
    productName: 'rose',
    price: 777,
    standart: 'RTeb-583',
    },
]

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
