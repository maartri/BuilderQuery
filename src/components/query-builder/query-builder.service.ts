import { Injectable, EventEmitter, Output } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QueryBuilderService {

    private emitChangeSource = new Subject<any>();
    
    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }
}