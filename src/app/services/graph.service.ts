import { Injectable } from '@angular/core';
import { AlertStructure } from '../Model/alertStructure';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class GraphService {

    selectedAlert = new BehaviorSubject<AlertStructure>({});
    setSelectedAlert(alert: AlertStructure) {
        this.selectedAlert.next(alert);
    }
}
