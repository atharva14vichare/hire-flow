const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5001;
const HOST = '0.0.0.0'; // Explicitly bind to all interfaces

app.use(cors({
    origin: 'http://localhost:3000', // Ensure this matches your FE's port
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 204
}));

app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, 'data.json');

// Helper function to read data
const readCandidates = () => {
    try {
        console.log(`Backend: Attempting to read data from: ${dataFilePath}`); // New log
        const data = fs.readFileSync(dataFilePath, 'utf8');
        console.log('Backend: Successfully read raw data.json content.'); // New log
        const parsedData = JSON.parse(data);
        console.log(`Backend: Successfully parsed data.json. Found ${parsedData.length} candidates.`); // New log
        return parsedData;
    } catch (error) {
        console.error('Backend: CRITICAL ERROR reading or parsing data.json:', error); // Emphasize critical error
        // Important: If data.json is truly bad, let's make it obvious.
        // process.exit(1); // Consider exiting process if data is unreadable, for clear failure.
        return []; // Keep returning empty array for now to avoid crashing the server.
    }
};

// Helper function to write data
const writeCandidates = (candidates) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(candidates, null, 2), 'utf8');
        console.log('Backend: Successfully wrote data to data.json');
    } catch (error) {
        console.error('Backend: Error writing candidates data:', error);
    }
};

// GET all candidates
app.get('/api/candidates', (req, res) => {
    console.log('Backend: /api/candidates GET request received.');
    const candidates = readCandidates(); // Call readCandidates on each request
    res.json(candidates);
});

// POST to update candidate status
app.post('/api/candidates/update-status', (req, res) => {
    console.log('Backend: /api/candidates/update-status POST request received:', req.body);
    const { id, status } = req.body;
    const candidates = readCandidates();
    const candidateIndex = candidates.findIndex(c => c.id === id);

    if (candidateIndex > -1) {
        candidates[candidateIndex].status = status;
        writeCandidates(candidates);
        console.log(`Backend: Candidate ${id} status updated to ${status}.`);
        res.json({ message: 'Candidate status updated successfully', candidate: candidates[candidateIndex] });
    } else {
        console.warn(`Backend: Candidate ${id} not found for status update.`);
        res.status(404).json({ message: 'Candidate not found' });
    }
});

// Explicitly define host and port for listen
app.listen(PORT, HOST, () => { // <--- Changed app.listen
    console.log(`Server running on http://${HOST}:${PORT}`);
    console.log(`CORS configured to allow requests from http://localhost:3000`);
    console.log('Backend: Server started successfully. Ready to receive requests.'); // Final confirmation log
});