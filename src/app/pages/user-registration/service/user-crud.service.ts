import { Injectable, signal, computed } from "@angular/core";
import { AbstractUserService } from "./user-crud-abstract.service";
import { UserCreate, User } from "../../../model/user.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { OperationResult } from "../../../model/operation-result.model";
import { environment } from "../../../../../environments/environments"
import { response } from "express";
import { error } from "console";

@Injectable({
    providedIn:'root'
})
export class UserService extends AbstractUserService{
    private _users = signal<UserCreate[]>([]);

    users = computed(()=> this._users());

    constructor(private http: HttpClient){
        super();
        this.refresh();
    }

    override refresh(): void {
        
    }

    override add(user: Omit<UserCreate, "id">): Observable<OperationResult> {
        return this.http.post<UserCreate>(
            `${environment.apiUrl}/user`, 
            user,
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

    override update(user: User): Observable<OperationResult> {
        return of()
    }

    override search(query: string): Observable<OperationResult> {
        return of()
    }

    override search_by_id(id: number): Observable<OperationResult> {
        return of()
    }
}