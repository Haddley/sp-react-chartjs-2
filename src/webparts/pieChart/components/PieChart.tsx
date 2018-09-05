import * as React from 'react';
import styles from './PieChart.module.scss';
import { IPieChartProps } from './IPieChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};


export default class PieChart extends React.Component<IPieChartProps, {}> {
  public render(): React.ReactElement<IPieChartProps> {
    return (
      <div className={styles.pieChart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>

              <Pie data={data} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
