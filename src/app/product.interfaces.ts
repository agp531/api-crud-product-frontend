export interface ProductInterface {
    id?: string;
    name: string,
    description: string,
    stock: number,
    price: number,
    photo: string | File | null
}