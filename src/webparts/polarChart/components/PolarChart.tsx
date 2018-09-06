import * as React from 'react';
import styles from './PolarChart.module.scss';
import { IPolarChartProps } from './IPolarChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Polar } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

export default class PolarChart extends React.Component<IPolarChartProps, {}> {
  public render(): React.ReactElement<IPolarChartProps> {
    return (
      <div className={styles.polarChart}>
        <div className={styles.container}>

          <div className={styles["webpart-header"]}>
            <span className={styles["view"]}>{this.props.description}</span>
          </div>

          <div className={styles.row}>
            <div className={styles.column}>

              <Polar data={data} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
