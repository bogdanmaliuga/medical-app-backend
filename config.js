module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/medical',
    SECRET_TOKEN: 'holaToken'
  }
  