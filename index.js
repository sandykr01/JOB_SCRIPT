const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1',getRoutes);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});