const express = require ('express');
const conectarBD = require ('../config/db');
const cors = require ('cors');

// configuracion express  y  puerto
const app = express();
const port = 5000;
app.use(express.json());

//  aca  van las rutas de los  modulos 
app.use('/api/clientes', require('../routes/RoutesCliente'));

// enlazamos la conexion de la base de datos 
conectarBD();
app.use(cors());

//  se  configura el puerto que va tener  nuestro servidor 
app.listen(port, () => console.log('Servidor Conectado http://localhost:5000'));

// se prueba esta  ruta en el navegador 
app.get('/', (req,res) =>{
    res.send("Bienvenido nuestro servidor esta configurado");
});