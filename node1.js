class Node1 {
    constructor(){
        this.dic = {}
    }
    Set(name,value){
        this.dic[name]= value
    }
    Get(name){
        
        if(this.dic.hasOwnProperty(name)){
            return this.dic[name]
        }
        else{
            return `No existe cadena de nombre ${name}`
        }
    }
    Inc(name){
        if ( typeof(this.Get(name)) =="number" || this.Get(name)=='0' ){
            ++this.dic[name]
        }
        else {
            console.log("No es un numero o no esta definido")
        }
    }
    Delete(name){
        if (this.dic.hasOwnProperty(name) != null){
            delete this.dic[name]
            return (`Deletion of ${name} done`)
        }
    }
    Expire(name,timeout){
        setTimeout(() => {
            this.Delete(name)
        }, timeout);
    }

}

let prueba = new Node1();
prueba.Set("nombre","juan")
prueba.Set("edad",0)
// console.log(eval(process.argv[2]))

