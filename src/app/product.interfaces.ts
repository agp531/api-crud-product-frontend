export interface ProductInterface {
    name: string,
    description: string,
    stock: number,
    price: number,
    photo: string | Blob | null
}