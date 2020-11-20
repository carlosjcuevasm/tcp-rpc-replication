var xmlrpc = require('xmlrpc')
var portNumber = 9090
var hostNumber = 'localhost'
var magicNumber = 1962
function Set (name,value) {

    var client = xmlrpc.createClient({ host: hostNumber, port: portNumber  , path: '/'})
  
    client.methodCall('Set', [name,value,magicNumber], function (error, res) {
      
      console.log('Method response for \'Set\': ' + res)
    })
  
}
function Get (name) {

    var client = xmlrpc.createClient({ host: hostNumber, port: portNumber  , path: '/'})
  
    client.methodCall('Get', [name,magicNumber], function (error, res) {
      
      console.log('Method response for \'Get\': ' + res)
    })
  
}

function Inc (name) {

    var client = xmlrpc.createClient({ host: hostNumber, port: portNumber  , path: '/'})
  
    client.methodCall('Inc', [name,magicNumber], function (error, res) {
      console.log('Method response for \'Get\': ' + res)
    })
  
}
Set('edad', '29')
Get('edad')

