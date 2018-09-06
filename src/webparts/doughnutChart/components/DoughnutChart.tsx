import * as React from 'react';
import styles from './DoughnutChart.module.scss';
import { IDoughnutChartProps } from './IDoughnutChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Doughnut } from 'react-chartjs-2';

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

export default class DoughnutChart extends React.Component<IDoughnutChartProps, {}> {
  public render(): React.ReactElement<IDoughnutChartProps> {


    return (
      <div className={styles.doughnutChart}>
        <div className={styles.container}>

          <div className={styles["webpart-header"]}>
            <span className={styles["view"]}>{this.props.description}</span>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>

              <Doughnut data={data} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
