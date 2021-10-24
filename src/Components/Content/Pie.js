import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Pie.css';

const data = {
    labels: ['With Bot', 'Without Bot'],
    datasets: [
        {
            label: 'Sales',
            data: [70, 30],
            backgroundColor: [
                'rgba(226, 63, 36, 0.2)',
                'rgba(16, 52, 106, 0.2)',
            ],
            borderColor: [
                'rgba(226, 63, 36, 1)',
                'rgba(16, 52, 106, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    cutout: 110,
};

const Pie = () => {
    return (
        <div class="pie">
            <div class="pie__top">
                Total Orders
            </div>
            <div>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default Pie;