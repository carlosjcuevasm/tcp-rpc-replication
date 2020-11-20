var xmlrpc = require('xmlrpc')
var portNumber = 9090
var hostNumber = 'localhost'
var magicNumber = 1962

var dic = {}

var server = xmlrpc.createServer({ host: 'localhost', port: portNumber })

server.on('NotFound', function(method, params) {
  console.log('Method ' + method + ' does not exist');
})

server.on('Set', function (err, params, callback) {
    if(params[2]==magicNumber){
    console.log('Method call params for \'Set\': ' + params)
    dic[params[0]] =params[1]
    console.log(dic)
  

    callback(null, '')
    }
    else{
        console.log('Not authorized');
        callback(null,'Not authorized')
    }
})
server.on('Get', function (err, params, callback) {
    if(params[1]==1962){
    console.log('Method call params for \'Get\': ' + params)
        if(dic.hasOwnProperty(params[0])){
            callback(null,dic[params[0]])
        }
        else{
            callback(null,"Property does not exist")
        }
    console.log(dic)
    }
    else{
        console.log('Not authorized');
        callback(null,'Not authorized')
    }
})
server.on('Inc', function (err, params, callback) {
    if(params[1]==1962){
    console.log('Method call params for \'Inc\': ' + params)
        if ( typeof(Get(name)) =="number"){
            ++dic[name]
        }
        else {
            console.log("Not a number")
        }
    console.log(dic)
    }
    else{
        console.log('Not authorized');
        callback(null,'Not authorized')
    }
})

console.log('XML-RPC server listening on port 9090')