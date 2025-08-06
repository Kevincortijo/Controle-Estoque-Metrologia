import { Injectable, signal, computed } from "@angular/core";
import { AbstractUserService } from "./user-crud-abstract.service";
import { User } from "../../../model/user.model";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { OperationResult } from "../../../model/operation-result.model";

@Injectable()
export class UserService extends AbstractUserService{
    private _users = signal<User[]>([]);

    users = computed(()=> this._users());

    constructor(private http: HttpClient){
        super();
        this.refresh();
    }

    override refresh(): void {
        
    }

    override add(user: Omit<User, "id">): Observable<OperationResult> {
        return of()
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