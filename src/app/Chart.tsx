"use client";

import "ag-charts-enterprise";
import { AgChartOptions, AgCharts } from "ag-charts-enterprise";
import { AgChartsReact } from "ag-charts-react";

import { getData } from "./data";
import { useState } from "react";

const DemoChart = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    data: getData(),
    title: {
      text: "UK Government Budget",
    },
    subtitle: {
      text: "All values in £ billions",
    },
    series: [
      {
        type: "waterfall",
        xKey: "financials",
        xName: "Financials",
        yKey: "amount",
        yName: "Amount",
      },
    ],
  });
  return <AgChartsReact options={options} />;
};

export default DemoChart;
