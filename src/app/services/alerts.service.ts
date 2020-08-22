import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertStructure } from '../Model/alertStructure';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AlertsService {

    private path = '../assets/datasource.json';

    public alertsList: AlertStructure[] = [];
    public json_observable: Observable<AlertStructure[]>;
    public selectedAlert = new BehaviorSubject<AlertStructure>({});
    public selectedAlert_observable: Observable<AlertStructure>;

    constructor(private httpService: HttpClient) {
        this.json_observable = this.httpService.get<AlertStructure[]>(this.path);
        this.selectedAlert_observable = this.selectedAlert.asObservable();
    }

    setAlerts(value: AlertStructure[]) {
        this.alertsList = value;
    }

    getAlerts() {
        return this.alertsList;
    }

    getUnreadAlerts() {
        return this.alertsList.filter(value => {
            if (value.read === false) {
            return value;
            }
        });
    }

    markAlertRead(alert) {
        alert.read = true;
        // this.alertsList.next(this.getAlerts());
    }

    // for graph - section
    setSelectedAlert(alert: AlertStructure) {
        this.selectedAlert.next(alert);
    }
}

