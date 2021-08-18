const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');

const app = express();

//enviroment variables - se exite uma porta definida para essa app usa se não usa 4000
app.set('port', process.env.PORT || 4000)

//se não definiar nenhum caminho ele aceitará todos eles
app.use(cors());
//app.use(cors({origin: "http://localhost:4200"}))  liberando cors para um espeficico

app.use(morgan('dev'));
app.use(express.json());
//entender formularios q tenham HTML
app.use(express.urlencoded({ extended: false}));

app.use("/api/employees", require('./routes/employees.routes'))

module.exports = app;