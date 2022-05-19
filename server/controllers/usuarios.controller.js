const usuarioCTRL = {}

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'require()';

const users = require('../models/usuarios.model');

usuarioCTRL.hello = (req, res) => {
  res.json({ status: 'Hola, Hello, Bonjour' });
}

usuarioCTRL.createUser = async (req, res) => {
  const newUser = new users({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    user: req.body.user,
    pass: bcrypt.hashSync(req.body.pass),
  });

  await newUser.save()
    .then(() => {
      res.json({ status: '1' });//saved!!!
    })
    .catch((err) => {
      if(err.code == 11000){
        res.json({ status: '2' });//usuario or email already exists
      }
      else{
        res.json({ status: '3' });//error saving
      }
      console.log(err);
    });
}

usuarioCTRL.loginUser = async (req, res) => {
  const userData = {
    user: req.body.user,
    pass: req.body.pass,
  }

  await users.findOne({ user: userData.user })
    .then((user) => {
      if (!user) { //user not exists
        return res.json({ status: '4' });
      }

      const resPass = bcrypt.compareSync(userData.pass, user.pass)

      if (resPass) {
        const expiresIn = 20 * 60 * 60;
        const accessToken = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: expiresIn });

        const sendInfo = {
          nombre: user.nombre,
          user: user.user,
          accessToken: accessToken,
          expiresIn: expiresIn,
          class: user.class,
          status: '1'
        }

        console.log(sendInfo);
        res.json(sendInfo);
      }
      else { //bad password
        res.json({ status: '2' });
      }
    })
    .catch((err) => { //error in server
      res.json({ status: '3' });
    });
}

usuarioCTRL.getUsers = async (req, res) => {
  const info = await users.find();
  res.json(info);
}

usuarioCTRL.deleteUser = async (req, res) => {
  await users.findByIdAndDelete(req.params.id)
    .then(() => res.json({ status: 'Usuario eliminado' }))
    .catch(() => res.json({ status: 'Error al eliminar usuario' }));
}

/*
usuarioCTRL.newUser = async (req, res) => {
  const usuario = new users({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    pass: req.body.pass,
  });
  await usuario.save()
    .then(() => res.json({ status: 'Guardado' }))
    .catch(() => res.json({ status: 'Error al guardar usuario' }));
}

usuarioCTRL.getUser = async (req, res) => {
  const usuario = await users.findById(req.params.id);
  res.json(usuario);
}

usuarioCTRL.updateUser = async (req, res) => {
  let { id } = req.params;
  let info = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    pass: req.body.pass
  }

  await users.findByIdAndUpdate(id, { $set: info }, { new: true })
    .then(() => res.json({ status: 'Actualizado' }))
    .catch(() => res.json({ status: 'Error al actualizar usuario' }));

}
*/

module.exports = usuarioCTRL;