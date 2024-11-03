import React, { useState } from 'react';
import './ModelSelection.css'; 

const ModelSelection = () => {
    const [model, setModel] = useState('RandomForest');
    const [isRunning, setIsRunning] = useState(false);

    const handleModelRun = () => {
        
        setIsRunning(true);
        console.log('Running model:', model);

        
        setTimeout(() => {
            setIsRunning(false);
            alert(`Model ${model} has finished running!`); 
        }, 2000); 
    };

    return (
        <div className="model-selection-container">
            <h2>Select Model</h2>
            <select 
                className="model-select" 
                value={model} 
                onChange={(e) => setModel(e.target.value)}
            >
                <option value="RandomForest">Random Forest</option>
                <option value="DecisionTree">Decision Tree</option>
                <option value="LinearRegression">Linear Regression</option>
            </select>
            <button 
                className="run-model-button" 
                onClick={handleModelRun} 
                disabled={isRunning}
            >
                {isRunning ? 'Running...' : 'Run Model'}
            </button>
            {isRunning && <p className="running-feedback">Executing {model} model...</p>}
        </div>
    );
};

export default ModelSelection;
