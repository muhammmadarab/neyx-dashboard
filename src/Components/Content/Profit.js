import React from 'react';
import { Line as LineChart } from 'react-chartjs-2';
import './Profit.css';

const data = {
    labels: [10, 11, 12, 13, 14, 15, 16],
    datasets: [
        {
            label: 'Profit',
            data: [10, 50, 90, 30, 10, 0, 10],
            fill: false,
            backgroundColor: 'rgb(255, 255,255)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
        },
    ],
};
  
const options = {
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            display: false
        },
        x: {
            grid: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                color: "#fff"
            }
        }
    }
};

function Profit() {
    return (
        <div class="profit">
            <div class="profit__rel">
                <div class="profit__pseudo"></div>
                <div class="profit__top">
                    <div>
                        $2332
                    </div>
                    <div>
                        Profit genration
                    </div>
                </div>
                <div class="profit__chart">
                    <LineChart data={data} options={options} height="230px" />
                </div>
            </div>
        </div>
    )
}

export default Profit;