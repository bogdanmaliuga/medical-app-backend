'use strict'

const User = require('../models/user');
const servicios = require('../services')

function signUp(req, res){
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  })

  user.save((err) =>{
    if(err) return res.status(500).send({ message: `Error al crear usuario ${err}`});

    return res.status(200).send({ token: servicios.createToken(user) });
  })
}

function signIn(){
  user.find({email: req.body.email}, (err, user) =>{
    if(err) return res.status(500).send({message: `Error al registrarse ${err}`});
    if(!user) return res.status(404).send({message: 'No existe el usuario'});

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: service.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}
