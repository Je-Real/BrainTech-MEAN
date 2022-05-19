const mongoose = require('mongoose');
const userSchema = require('../models/usuarios.model');

userSchema.statics = {
    create: function (data, cb) {
      const user = new this(data);
      user.save(cb);
    },
    login: function (query, cb){
      this.find(query, cb);
    }
}

const users = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    apellido: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    user: { type: String, required: true, unique: true },
    pass: { type: String, required: true, trim: true },
    class: { type: Number, required: false}
},{
    timestamps: true,
}
);

module.exports = mongoose.model('users', users);