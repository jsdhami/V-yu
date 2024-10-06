"use client";

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

// make domy data
const data = [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 200 },
  { name: 'Wed', value: 150 },
  { name: 'Thu', value: 80 },
  { name: 'Fri', value: 70 },
  { name: 'Sat', value: 110 },
  { name: 'Sun', value: 130 },
];


const CH4Chart = () => {

  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    const option: echarts.EChartsOption = {
      // title: {
      //   text: 'ECharts Example',
      // },
      tooltip: {},
      xAxis: {
        data: data.map((item) => item.name),
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
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
