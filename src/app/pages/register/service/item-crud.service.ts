import { AbstractItemService } from "./item-crud-abstract.service";
import { computed, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { OperationResult } from "../../../model/operation-result.model";
import { ItemCreate, Item } from "../../../model/item.model";

@Injectable()
export class ItemService extends AbstractItemService {
    private _items = signal<Item[]>([]);

    items = computed(()=> this._items());

    constructor(private http: HttpClient){
        super();
        this.refresh();
    }

    override refresh(): void {
        
    }

    override add(user: Omit<ItemCreate, "id">): Observable<OperationResult> {
        return of()
    }

    override remove(id: number): Observable<OperationResult> {
        return of()
    }

    override update(user: Item): Observable<OperationResult> {
        return of()
    }

    override search(query: string): Observable<OperationResult> {
        return of()
    }

    override search_by_id(id: number): Observable<OperationResult> {
        return of()
    }
}