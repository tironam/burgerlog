const orm = require('../config/orm')

module.exports = {
    getBurgers (cb) {
        orm.getAll('burgers', burgers => cb(burgers))
    },
    addBurgers (burger, cb) {
        orm.createOne('burgers', burger, info => cb(info))
    },
    updateBurgers (changes, where, cb) {
        orm.updateOne('burgers', changes, where, info => cb(info))
    }
}
