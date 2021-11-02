import React from 'react';
import { Line } from 'react-chartjs-2';
import './Area.css';

const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Usage',
            data: [30, 120, 150, 100, 50, 70],
            backgroundColor: 'rgb(226,63,36)',
            borderColor: 'rgba(226, 63, 36, 0.2)',
            fill: {
                target: 'origin',
                above: 'rgba(226, 63, 36, 0.2)',   // Area will be red above the origin
            }
        },
    ],
};
  
const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

function Area() {
    return (
        <div class="area">
            <div class="area__top">
                <div>Usage of Neyx</div>
                <div>Today  <i class="fas fa-chevron-down"></i></div>
            </div>
            <Line data={data} options={options} />
        </div>
    )
}

export default Area;