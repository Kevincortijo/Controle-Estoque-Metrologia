import { Signal } from "@angular/core";
import { UserCreate } from "../../../model/user.model";
import { Observable } from "rxjs";
import { OperationResult } from "../../../model/operation-result.model";

export abstract class AbstractUserService{
    abstract users: Signal<UserCreate[]>;
    abstract refresh(): void;
    abstract add(user: Omit<UserCreate, 'id'>): Observable<OperationResult>;
    abstract update(user: UserCreate): Observable<OperationResult>;
    abstract remove(id: number): Observable<OperationResult>;
    abstract search(query: string): Observable<OperationResult>;
    abstract search_by_id(id: number): Observable<OperationResult>;
     
}