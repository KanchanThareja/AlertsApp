import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { AlertStructure } from '../Model/alertStructure';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements OnInit {

  @Input() list_header_lengths: any;
  @Output() selectedAlert: any = new EventEmitter();
  _alertsList: AlertStructure[] = [];

  @Input()
  set alertsList(alertsList) {
    if (alertsList && alertsList.length > 0) {
      this._alertsList = alertsList;
      if (this._alertsList[0].read == false)
        this.clickHandler(this._alertsList[0]);
    }
    else
      this._alertsList = [];
  }

  ngOnInit(): void {
  }

  clickHandler(alert) {
    this.selectedAlert.emit(alert);
  }
}
