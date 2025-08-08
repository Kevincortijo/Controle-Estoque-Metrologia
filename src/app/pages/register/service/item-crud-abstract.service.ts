import { ItemCreate, Item } from "../../../model/item.model";
import { Observable } from "rxjs";
import { OperationResult } from "../../../model/operation-result.model";
import { Signal } from "@angular/core";

export abstract class AbstractItemService {
    abstract items: Signal<Item[]>;
    abstract refresh(): void;
    abstract add(user: Omit<ItemCreate, 'id'>): Observable<OperationResult>;
    abstract update(user: ItemCreate): Observable<OperationResult>;
    abstract remove(id: number): Observable<OperationResult>;
    abstract search(query: string): Observable<OperationResult>;
    abstract search_by_id(id: number): Observable<OperationResult>;    
}