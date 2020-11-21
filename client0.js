const { get } = require('http')
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

function Delete (name){
    var client = xmlrpc.createClient({ host: hostNumber, port: portNumber  , path: '/'})
  
    client.methodCall('Delete', [name,magicNumber], function (error, res) {
      console.log('Method response for \'Delete\': ' + res)
    })     
}



function Expire (name,time){
    var client = xmlrpc.createClient({ host: hostNumber, port: portNumber  , path: '/'})
  
    client.methodCall('Expire', [name,time,magicNumber], function (error, res) {
      console.log('Method response for \'Expire\': ' + res)
    })     
}

Set('nombre','juan')
Set('edad', '29')
Get('edad')
Expire('nombre',3000)
Delete('edad')
Get('edad')


