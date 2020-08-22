import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'graph-section',
  templateUrl: './graph-section.component.html',
  styleUrls: ['./graph-section.component.css']
})

export class GraphSectionComponent implements OnInit {

  @Input() chartTitle: string;
  @Input() chartOption: EChartOption;

  constructor() { }

  ngOnInit(): void { }
}
