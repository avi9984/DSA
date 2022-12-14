//  Proxies-> Proxies (proxy object) are used to wrap an object and redefine various operations into the object such as reading, insertion, validation, etc. 

// Proxy allows you to add custom behavior to an object or a function.

// The syntax of proxy is:

// new Proxy(target, handler);
// Here,

// new Proxy() - the constructor.
// target - the object/function which you want to proxy
// handler - can redefine the custom behavior of the object


const student={
    name:"Avinash Kumar",
    age: 22,
    designation: "Software Engineer"
}
const handler={
    get: function(obj,prop){
        return obj[prop] ? obj[prop] :'property does not exist'
    }
}
const proxy=new Proxy(student,handler);
console.log(proxy.name);
console.log(proxy.age)
console.log(proxy.blood)