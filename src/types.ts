export interface IProductType {
    typeId?: number
    typeName: string
}

export interface ITypesState {
    productTypes: IProductType[]
}

export interface IProduct extends IProductType {
    productId: number
    productName: string
    price: number
    standart: string
}

export interface IProductsState {
    products: IProduct[]
}

export interface ICartItem extends IProduct {
    count: number
}



export interface ICartState {
    products: ICartItem[]
}

export interface IUserAction {
    type: string
    payload?: any;
}
