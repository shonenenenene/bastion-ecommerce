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

export interface IUserAction {
    type: string
    payload?: any;
}