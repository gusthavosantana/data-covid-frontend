import { SingleBarCircle } from "../SingleBarCircle";

interface Props {
  data: any[];
  tooltipFormatter?: Function;
}

export function DonutsChart({ data, tooltipFormatter }: Props) {
  const config = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        return tooltipFormatter && tooltipFormatter(params);
      }
    },
    color: ['#3B00ED', '#D81B60'],
    legend: {
      bottom: '0',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data,
      }
    ]
  };

  return <SingleBarCircle data={config} />
}