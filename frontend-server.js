const express = require('express');
const path = require('path');

const app = express();

// Serve static files from frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Route all requests to index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(8000, () => {
    console.log('🌐 Frontend server running on http://localhost:8000');
});
