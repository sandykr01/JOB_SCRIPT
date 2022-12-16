const express = require('express');
const { mainModule } = require('process');
const routes = express.Router();

routes.post('/indeed', async(req, res) => {
    try {
        // const { jobTitle, location } = req.body;
        const {skills} = req.body;
        let scrp = await mainModule(skills);
        return res.status(200).json({ 
            status: 'success',
            list: scrp?.list || {}// if scrp is not there, then . won't work
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
