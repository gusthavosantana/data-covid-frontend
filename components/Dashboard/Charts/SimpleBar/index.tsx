import ReactECharts from 'echarts-for-react';

interface Props {
  title: string;
  xAxisData: any[];
  seriesData: any[];
};

export function SimpleBarChart({ title, xAxisData, seriesData }: Props) {
  const config = {
    color: "#FF965D",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: '#000000',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 18,
        fontFamily: 'Roboto',
        lineHeight: 24
      }
    },
    grid: {
      left: '0',
      height: '70%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLabel: {
        width: 100,
        overflow: 'truncate',
        interval: 0,
        rotate: 50,
        color: 'rgba(0, 0, 0, 0.6)',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        fontFamily: 'Roboto',
        lineHeight: 16
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: seriesData,
        type: 'bar',
        barWidth: '45%',
        itemStyle: {
          borderRadius: [3, 3, 0, 0]
        }
      }
    ]
  };

  return <ReactECharts option={config} />;
}