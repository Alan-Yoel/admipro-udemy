import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels')doughnutChartLabels: string[] = [  ];
  @Input('chartData')doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ ] },
      { data: [ ] },
      { data: [ ] }
    ]
  };
  @Input('chartType')doughnutChartType: ChartType = 'doughnut';
  
  
  
  
  // @Input('chartLabels') doughnutChartLabels: string[] = [];
  // @Input('chartData') doughnutChartData: number[] = [];
  // @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}


