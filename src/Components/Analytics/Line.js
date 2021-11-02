import React from 'react';
import { Line as LineChart } from 'react-chartjs-2';
import "./Line.css";

const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'With Bot',
            data: [30, 120, 150, 100, 50, 70],
            fill: false,
            backgroundColor: 'rgb(226,63,36)',
            borderColor: 'rgba(226, 63, 36, 0.2)',
        },
        {
            label: 'Without Bot',
            data: [10, 50, 90, 30, 10, 0],
            fill: false,
            backgroundColor: 'rgb(16,52,106)',
            borderColor: 'rgba(16, 52, 106, 0.2)',
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

const Line = () => {
    return (
        <div class="line">
            <div class="line__top">
                <div>Suggest a suitable title</div>
                <div>Month  <i class="fas fa-chevron-down"></i></div>
            </div>
            <div>
                <LineChart data={data} options={options} height="90px" />
            </div>
        </div>
    )
}

export default Line;