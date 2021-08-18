const empController = {}

const Employee = require('../models/Employee');

empController.getEmployees = async (req, res) => {
     const employees = await Employee.find();
     res.json(employees);
}

empController.createEmployess = async (req, res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save();

    res.send({message: 'Empregado criado!'});
} 

empController.getById = async (req, res) => {
   const employee = await Employee.findById(req.params.id)
    res.send(employee);
};

empController.updateEmployes = async (req, res) => {      
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Empregado atualizado!'})
    
}

empController.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Empregado Deletado!'})
};

module.exports = empController;