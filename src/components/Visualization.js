import React, { useEffect, useState } from 'react'; 
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Visualization = () => {
    const [temperatureData, setTemperatureData] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            
            const data = [22, 24, 25, 23, 27]; 
            setTemperatureData(data);
        };

        fetchData();
    }, []); 

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Temperature',
                data: temperatureData,
                fill: false,
                borderColor: 'blue',
                tension: 0.1,  
            },
        ],
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <h2>Climate Data Visualization</h2>
            <Line data={data} />
        </div>
    );
};

export default Visualization;
