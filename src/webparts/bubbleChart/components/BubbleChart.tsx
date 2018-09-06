import * as React from 'react';
import styles from './BubbleChart.module.scss';
import { IBubbleChartProps } from './IBubbleChartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Bubble } from 'react-chartjs-2';

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{ x: 10, y: 20, r: 5 }]
    }
  ]
};

// https://blog.mptolly.com/creating-an-inline-editable-web-part-title-in-spfx/

export default class BubbleChart extends React.Component<IBubbleChartProps, {}> {
  public render(): React.ReactElement<IBubbleChartProps> {
    return (
      <div className={styles.bubbleChart}>
        <div className={styles.container}>

        <div className={styles["webpart-header"]}>
          <span className={styles["view"]}>{this.props.description}</span>        
        </div>

          <div className={styles.row}>
            <div className={styles.column}>

              <Bubble data={data} />

            </div>
          </div>
        </div>
      </div>

    );
  }
}
