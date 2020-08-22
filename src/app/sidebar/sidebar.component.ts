import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  @Input() alertCategories: Object[];
  @Input() defaultCategory: string;
  @Output() selectedAlertType = new EventEmitter<string>();

  alertType: string;

  constructor() { }

  ngOnInit(): void {
    this.alertType  = this.defaultCategory;
    this.setAlertType(this.alertType);
  }

  setAlertType(value: string) {
    this.alertType = value;
    this.selectedAlertType.emit(this.alertType);
  }
}
