const firstUser = function(){
    console.log('userOne');
}

const secondUser = function(){
    console.log('userTwo');
}

const sampleFunction = () =>{
    console.log('sampleFunction');
    setTimeout(firstUser,0);
    secondUser();
}

sampleFunction();