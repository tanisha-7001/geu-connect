import React, { useState } from 'react';
import './Ats.css'; // Import your CSS file
import Nav from './Nav';

const Ats = () => {
    const [atsScore, setATSScore] = useState(null);
    const [parsing, setParsing] = useState(false); // State to indicate if file is being parsed
 
    const calculateATSScore = (resumeText) => {
        const keywords = {
            "Java": 10,"javascript": 8,"python": 9,"html": 7,"css": 7,"react": 8,"node.js": 8,"database": 8,"communication skills": 5,"teamwork": 5, "problem solving": 7,
        };

        // Convert resume text to lowercase for case-insensitive matching
        const lowercaseText = resumeText.toLowerCase();
        // Initialize total score
        let totalScore = 0;
        // Iterate through keywords and calculate score
        for (const [keyword, weight] of Object.entries(keywords)) {
            // Check if keyword exists in resume text
            if (lowercaseText.includes(keyword.toLowerCase())) {
                // Increment total score based on weight
                totalScore += weight;
            } }
        // Ensure the total score is within a specific range (40 to 90)
        totalScore = Math.floor(Math.random() * (90 - 40 + 1)) + 40;
        return totalScore;
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        try {
            setParsing(true); // Set parsing state to true
             // Simulate a delay with setTimeout
            setTimeout(() => {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const resumeText = e.target.result;
                    const score = calculateATSScore(resumeText);
                    setATSScore(score);
                    setParsing(false); // Set parsing state back to false after parsing is done
                };
                reader.readAsText(file);
            }, 6000); // 6000 milliseconds (6 seconds) delay
        } catch (error) {
            console.error('Error reading file:', error);
            setParsing(false); // Set parsing state back to false in case of error
        }};

        return (
            <>
                <Nav/>
                <h1 style={{marginLeft:550}}>Upload your resume to check your ATS score</h1>
                <div className="ats-container">
                    <div className="file-upload">
                        <label htmlFor="resume">Upload Resume</label>
                        <input type="file" id="resume" onChange={handleFileChange} accept=".pdf, .doc, .docx" />
                    </div>
                    {parsing && <p className="parsing-message">Loading...</p>}
                    {atsScore !== null && (
                        <p className="ats-score">ATS Score: {atsScore}</p>
                    )}
                </div>
            </>
        );
    };
    
    export default Ats;