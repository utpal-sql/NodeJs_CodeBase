const firstUser = function(){
    console.log('userOne');
}

const secondUser = function(){
    console.log('userTwo');
}

const sampleFunction = () =>{
    console.log('sampleFunction');
    setTimeout(firstUser,0);
    new Promise((resolve)=>resolve('Resolve Data')).then(resolve => console.log(resolve));
    secondUser();
}

sampleFunction();