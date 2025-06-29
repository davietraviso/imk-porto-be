const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landing.controller');

// Get first landing content
router.get('/', landingController.getLanding);

// Create landing content
router.post('/', landingController.createLanding);

// Update landing content
router.put('/:id', landingController.updateLanding);


module.exports = router;
