import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { BASE_URL } from 'utils/request';

type SeriesData={
    name:string;
    data: number[];
}

type ChartData ={
    labels:{
        categoria: string[];
    };
    series: SeriesData[];

}

const BarChart = () => {

    const [chartData, setChartData]=useState<ChartData>({

        labels:{
          categoria:[]  
        },
        series:[
            {
                name: "",
                data: [] 
            }
        ]


    });

    useEffect(()=>{
        axios.get(`${BASE_URL} /sales/succces-by-sller  `)
        .then(response =>{

            const data = response.data as SaleSuccess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round (100.0 * x.deals / x.visited, 1));

            setChartData({ labels:{
                categoria: myLabels  
              },
              series:[
                  {
                      name: " % Success",
                      data: mySeries 
                  }
              ]
      
      
          })
        })

    },[]);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    
    return (
     <Chart
       options={{...options, xaxis: chartData.labels}}
       series={chartData.series}
       type="bar"
       height="240"
     />
    );
  };
  
  export default BarChart;

function round(arg0: number, arg1: number): any {
    throw new Error('Function not implemented.');
}
