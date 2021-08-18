const { Schema, model } = require('mongoose')

//monstando a tabela de empregaos para add no servidor
const employeeSchema = new Schema({
    name: {type: String, require: true},
    position: {type: String, require: true},
    office: {type: String, require: true},
    salary: {type: Number, require: true},
}, 
{
    //quando criamos db ele vai nos avisar os dados de horarios
    timestamps: true,
    version: false,
});

module.exports = model("Employee", employeeSchema);
    

