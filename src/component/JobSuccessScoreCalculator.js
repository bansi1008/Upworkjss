import React, { useState } from 'react';

const JobSuccessScoreCalculator = () => {
  const [currentJSS, setCurrentJSS] = useState('');
  const [totalCompletedJobs, setTotalCompletedJobs] = useState('');
  const [jobs, setJobs] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addJob = () => {
    setJobs([...jobs, { rating: '', completedSuccessfully: false, cost: '' }]);
  };

  const updateJob = (index, field, value) => {
    const newJobs = [...jobs];
    newJobs[index][field] = field === 'completedSuccessfully' ? value.target.checked : value.target.value;
    setJobs(newJobs);
  };

  const calculateNewJSS = () => {
    const parsedCurrentJSS = parseFloat(currentJSS);
    const parsedTotalCompletedJobs = parseInt(totalCompletedJobs, 10);

    if (jobs.length === 0 || isNaN(parsedCurrentJSS) || isNaN(parsedTotalCompletedJobs)) {
      return parsedCurrentJSS || 0;
    }

    let weightedRatingSum = 0.0;
    let totalCost = 0.0;

    for (const job of jobs) {
      if (job.completedSuccessfully) {
        const jobRating = parseFloat(job.rating);
        const jobCost = parseFloat(job.cost);
        weightedRatingSum += jobCost * (jobRating / 5.0);
        totalCost += jobCost;
      }
    }

    if (totalCost === 0) {
      return parsedCurrentJSS;
    }

    const weightedAverageRating = weightedRatingSum / totalCost;
    const jobJSSImpact = weightedAverageRating * 100.0;

    const influenceFactor = Math.min(totalCost / (parsedTotalCompletedJobs * 100.0 + totalCost), 0.5);

    let newJSS = parsedCurrentJSS * (1.0 - influenceFactor) + jobJSSImpact * influenceFactor;

    if (newJSS < parsedCurrentJSS && jobJSSImpact > parsedCurrentJSS) {
      newJSS = parsedCurrentJSS + (jobJSSImpact - parsedCurrentJSS) * influenceFactor;
    }

    return Math.min(newJSS, 100).toFixed(2);
  };

  const containerStyles = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: darkMode ? '#333' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const buttonStyles = {
    width: '48%',
    padding: '10px',
    margin: '5px 1%',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#555' : '#007bff',
    color: darkMode ? '#f5f5f5' : 'white',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const jobCardStyles = {
    marginBottom: '15px',
    padding: '15px',
    backgroundColor: darkMode ? '#444' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, color 0.3s',
    animation: 'fadeInUp 0.5s ease-out',
  };

  return (
    <div style={containerStyles}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center mb-0">Job Success Score (JSS) Calculator</h1>
        <button style={buttonStyles} onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>

      <div className="mb-3">
        <label htmlFor="currentJSS" className="form-label">Current JSS (%):</label>
        <input
          type="number"
          id="currentJSS"
          value={currentJSS}
          onChange={e => setCurrentJSS(e.target.value)}
          className="form-control"
          placeholder="Enter your current JSS"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="totalCompletedJobs" className="form-label">Total Completed Jobs:</label>
        <input
          type="number"
          id="totalCompletedJobs"
          value={totalCompletedJobs}
          onChange={e => setTotalCompletedJobs(e.target.value)}
          className="form-control"
          placeholder="Enter your total completed jobs"
          required
        />
      </div>

      <div id="jobsContainer">
        {jobs.map((job, index) => (
          <div key={index} style={jobCardStyles}>
            <h3>Job {index + 1}</h3>
            <div className="mb-3">
              <label htmlFor={`rating${index}`} className="form-label">Rating (out of 5):</label>
              <input
                type="number"
                id={`rating${index}`}
                value={job.rating}
                onChange={e => updateJob(index, 'rating', e)}
                min="0"
                max="5"
                step="0.1"
                className="form-control"
                required
              />
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id={`completed${index}`}
                checked={job.completedSuccessfully}
                onChange={e => updateJob(index, 'completedSuccessfully', e)}
                className="form-check-input"
              />
              <label htmlFor={`completed${index}`} className="form-check-label">Completed Successfully</label>
            </div>

            <div className="mb-3">
              <label htmlFor={`cost${index}`} className="form-label">Cost (in dollars):</label>
              <input
                type="number"
                id={`cost${index}`}
                value={job.cost}
                onChange={e => updateJob(index, 'cost', e)}
                step="0.01"
                className="form-control"
                required
              />
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between">
        <button style={buttonStyles} onClick={addJob}>Add Job</button>
        <button
          style={buttonStyles}
          onClick={() => alert(`Your updated Job Success Score (JSS) is: ${calculateNewJSS()}%`)}
        >
          Calculate New JSS
        </button>
      </div>
    </div>
  );
};

export default JobSuccessScoreCalculator;
