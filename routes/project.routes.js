const express = require('express');
const router = express.Router();
const controller = require('../controllers/project.controller');

router.get('/', controller.getProjects);
router.post('/', controller.createProject);
router.delete('/:id', controller.deleteProject);


module.exports = router;
