'use strict'

const CPUs = require('os').cpus()

module.exports = function () {
  return Object.seal({
    'host': 'localhost',
    'user': '',
    'pwd': '',
    'db': '',
    'authDb': 'admin',
    'collection': '',
    'jsonArray': true,
    'upsertFields': undefined,
    'cpus': CPUs.length,
    'drop': false,
    'mode': 'insert'
  })
}
