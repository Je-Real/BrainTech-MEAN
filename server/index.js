const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const app = express();

const { mongoose } = require ('./database');

//conf
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use('/api/users', require('./routes/usuarios.routes'));
app.use('/api/posts', require('./routes/posts.routes'));

app.listen(app.get('port'), () => {
    console.log('¡Servidor en puerto', app.get('port') ,'listo!');
});
