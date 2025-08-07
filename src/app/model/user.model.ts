export interface UserCreate {
    name: string;
    email:string
    sector: string;
    registration: string;
    rfid_code: string;
}

export interface User extends UserCreate{
    id:number;
}
