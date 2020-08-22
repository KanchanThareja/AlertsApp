import { Component } from '@angular/core';
import { AlertsService } from './services/alerts.service';
import { EChartOption } from 'echarts';
import { AlertStructure } from './Model/alertStructure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  alertsList: AlertStructure[] = [];
  allAlerts: AlertStructure[] = []
  defaultCategory: string = "All Alerts";
  selectedAlertType: string;
  alertCategories: Object[] = [];

  list_header_lengths: any = {
    alerts_length: 0,
    unread_alerts_length: 0
  };

  chartTitle = '';
  chartOption: EChartOption = {};

  constructor(private alertService: AlertsService) { }

  ngOnInit(): void {

    // taking data from json file via httpClient and setting it in the service
    this.alertService.json_observable.subscribe(data => {
      
      this.alertService.setAlerts(data);
      this.allAlerts = data;
      this.updateAlertCategories();
      this.updateAlertList();
      this.updateHeaderLengths();

    });

    // subscriber for setting parameters for the graph on clicking on any alert
    this.alertService.selectedAlert_observable.subscribe(data => {
      this.chartTitle = data.description;
      this.chartOption = data.chartOptions;
      this.updateAlertCategories();
    });
  }

  // handler after clicking on an alert
  selectedAlert(alert) {
    this.alertService.markAlertRead(alert);
    this.alertService.setSelectedAlert(alert);
    this.updateHeaderLengths();
    this.updateAlertCategories();
  }

  // set header lengths for alerts-list
  updateHeaderLengths() {
    this.list_header_lengths.alerts_length = this.alertService.getAlerts().length;
    this.list_header_lengths.unread_alerts_length = this.alertService.getUnreadAlerts().length;
  }

  setAlertType(value: string) {
    this.selectedAlertType = value;
    this.updateAlertList();
    this.updateAlertCategories();
    this.updateHeaderLengths();
  }

  updateAlertList() {
    if (this.selectedAlertType == 'All Alerts') {
      this.alertsList = this.alertService.getAlerts();
    } else {
      this.alertsList = this.alertService.getUnreadAlerts();
    }
  }

  updateAlertCategories() {
    this.alertCategories = [
      {
        type: 'All Alerts',
        length: this.alertService.getAlerts().length
      },
      {
        type: 'Unread Alerts',
        length: this.alertService.getUnreadAlerts().length
      },
      {
        type: 'My Alerts',
        length: 0
      },
      {
        type: 'Shared Alerts',
        length: 0
      }];
  }
}
