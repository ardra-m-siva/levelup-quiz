import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import React from 'react'

const PieChart = ({progressData}) => {
    const totalGames = progressData.reduce((acc, item) => acc + item.gamesPlayed, 0);

    const chartData = progressData.map((item) => ({
        name: item.subject,
        y: (item.gamesPlayed / totalGames) * 100, // Convert to percentage
    }));
    const options = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Subjects Played'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },  
        credits:{
            enabled:false
        },
        series: [{
            type: 'pie',
            name: 'Share',
            data: chartData
        }]
    }

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>

    )
}

export default PieChart