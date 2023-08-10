let getUserDeatils = new Promise(function(resolve){
    setTimeout(() => resolve(1),1000);
})


getUserDeatils.then(function(result){
    console.log("Hi1 : "+result);
    return result * 2;
});

getUserDeatils.then(function(result){
    console.log("Hi2 : "+result);
    return result * 2;
});
getUserDeatils.then(function(result){
    console.log("Hi3 : "+result);
    return result * 2;
});