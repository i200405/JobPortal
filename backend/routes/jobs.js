const express = require('express');
const Job = require('../models/job');
const router = express.Router();

// Create a Job
router.post('/', async (req, res) => {
    const { title, description, company, location, salary, postedBy } = req.body;

    try {
        const newJob = new Job({
            title,
            description,
            company,
            location,
            salary,
            postedBy
        });

        const job = await newJob.save();
        res.json(job);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get All Jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find().populate('postedBy', ['name', 'email']);
        res.json(jobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get a Single Job
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id).populate('postedBy', ['name', 'email']);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.json(job);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete a Job
router.delete('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }
        await job.remove();
        res.json({ msg: 'Job removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
