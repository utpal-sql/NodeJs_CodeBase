var getUserDeatils = new Promise(function(resolve){
    setTimeout(() => resolve(1),1000);
})

getUserDeatils.then(function(result){
    console.log("Hi1 : "+result);
    return new Promise(function(resolve){
        setTimeout(() => resolve(result * 2),1000);
    })
}).then(function(result){
    console.log("Hi2 : "+result);
    return new Promise(function(resolve){
        setTimeout(() => resolve(result * 2),1000);
    })
}).then(function(result){
    console.log("Hi3 : "+result);
    return new Promise(function(resolve){
        setTimeout(() => resolve(result * 2),1000);
    })
});