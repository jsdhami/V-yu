"use client";

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

// make domy data
const data = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 550 },
  { name: 'April', value: 80 },
  { name: 'May', value: 70 },
  { name: 'June', value: 710 },
  { name: 'July', value: 100 },
  { name: 'Aug', value: 200 },
  { name: 'Sep', value: 300 },
  { name: 'Oct', value: 400 },
  { name: 'Nov', value: 500 },
  { name: 'Dec', value: 600 },
];


const CH4Chart = () => {

  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    const option: echarts.EChartsOption = {
      title: {
        text: 'Monthly Average Time Series of CO2 Concentration',
      },
      tooltip: {},
      xAxis: {
        data: data.map((item) => item.name),
      },
      yAxis: {},
      series: [
        {
          type: 'scatter',
          data: data.map((item) => item.value),
        },
      ],
    };

    myChart.setOption(option);

    const resizeChart = () => {
      myChart.resize();
    };

    window.addEventListener('resize', resizeChart);

    return () => {
      myChart.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return (
    <div
      id="main"
      className="w-full h-full "
    ></div>
  );
};

export default CH4Chart;
