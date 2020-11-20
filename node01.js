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
        if(dic.hasOwnProperty(params[0])==true){
            callback(null,dic[params[0]])
        }
        else{
            console.log(`Property ${params[0]} does not exist`)
            callback(null,`Property ${params[0]} does not exist`)
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
        if(dic.hasOwnProperty(params[0])==true){
            // callback(null,dic[params[0]])
            if ( typeof(dic[params[0]] =="number") == true){
                console.log('j')
                ++dic[params[0]]
                callback(null,'')
            }
            else {
                console.log(`Property ${params[0]} does not exist`)
                callback(null,'Not a number')
            }
        }
        else{
            console.log(`Property ${params[0]} does not exist`)
            callback(null,`Property ${params[0]} does not exist`)
        }
        
        
    }
    else {
        console.log("Not authorized")
        callback(null,"Not authorized")
    }
    console.log(dic)
    
})


server.on('Delete', function (err, params, callback) {
    if(params[1]==magicNumber){
    console.log('Method call params for \'Delete\': ' + params)
        if (dic.hasOwnProperty(params[0]) == true){
            delete dic[params[0]]
            console.log(`Deletion of ${params[0]} done`)
            callback(null, '')
        }
        else{
            console.log(`Property ${params[0]} does not exist`)
            callback(null,`Property ${params[0]} does not exist`)
        }
    
    }
    else{
        console.log('Not authorized');
        callback(null,'Not authorized')
    }
})


server.on('Expire', function (err, params, callback) {
    if(params[2]==magicNumber){
    console.log('Method call params for \'Expire\': ' + params)
        if (dic.hasOwnProperty(params[0]) == true && !isNaN(params[1])==true){
           setTimeout(() => {
                delete dic[params[0]]
                console.log(`Deletion of ${params[0]} done`)
                callback(null, '')
           }, params[1]);
        }
        else{
            console.log(`Property ${params[0]} does not exist`)
            callback(null,`Property ${params[0]} does not exist`)
        }
    
    }
    else{
        console.log('Not authorized');
        callback(null,'Not authorized')
    }
})
console.log('XML-RPC server listening on port 9090')