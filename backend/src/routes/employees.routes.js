const { Router } = require('express');
const router = Router();


const empController = require('../controllers/employees.controller');

router.get('/', empController.getEmployees);

router.post('/', empController.createEmployess);

router.get('/:id', empController.getById);

router.put('/:id', empController.updateEmployes);

router.delete('/:id', empController.deleteEmployee);

module.exports = router;