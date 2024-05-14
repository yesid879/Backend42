const express = require ('express');
const conectarBD = require ('../config/db');
const cors = require ('cors');

// configuracion express  y  puerto
const app = express();
const port =  process.env.PORT || 5000;

// enlazamos la conexion de la base de datos 
conectarBD();
app.use(cors());
app.use(express.json());


//  aca  van las rutas de los  modulos 
app.use('/api/clientes', require('../routes/RoutesCliente'));


//  se  configura el puerto que va tener  nuestro servidor 
app.listen(port, () => console.log('Servidor Conectado http://localhost:5000'));

// se prueba esta  ruta en el navegador 
app.get('/', (req,res) =>{
    res.send("Bienvenido nuestro servidor esta configurado");
});