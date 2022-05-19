const mongoose = require('mongoose');
const URI = 'mongodb://localhost/DataBrain';

mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(URI)
  .then(db => console.log('Conectado a BD.', URI))
  .catch(err => console.log(err));

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Base de datos desconectada');
  })
})

module.exports = { mongoose };