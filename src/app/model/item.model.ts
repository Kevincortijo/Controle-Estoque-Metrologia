export interface ItemCreate {
    name: string;
    code: string;
    quantity: number;
    supplier: string;
    manufacturer: string;
    unit_price: number;
    descripition: string;
}

export interface Item extends ItemCreate{
    id:number;
}
