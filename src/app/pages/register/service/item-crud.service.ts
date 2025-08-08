import { AbstractItemService } from "./item-crud-abstract.service";
import { computed, Injectable, signal } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { OperationResult } from "../../../model/operation-result.model";
import { ItemCreate, Item } from "../../../model/item.model";
import { environment } from "../../../../../environments/environments";

@Injectable({
    providedIn:'root'
})
export class ItemService extends AbstractItemService {
    private _items = signal<Item[]>([]);

    items = computed(()=> this._items());

    constructor(private http: HttpClient){
        super();
        this.refresh();
    }

    override refresh(): void {
        
    }

    override add(item: Omit<ItemCreate, "id">): Observable<OperationResult> {
        return this.http.post<ItemCreate>(
            `${environment.apiUrl}/items/register`,
            item,
            {observe:'response'}
        ).pipe(
            map(response=>({
                success:response.status >= 200 && response.status <=300,
                data: response.body,
                status: response.status
            })),
            catchError((error:HttpErrorResponse)=>
                of({
                    success:false,
                    status:error.status,
                    data:error.message
                })
            )
        )
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