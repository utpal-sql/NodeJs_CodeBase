var getUserDeatils = new Promise((resolve,reject)=>{
  console.log('User Deatils Retrive');
  resolve()  
}).then(() => {
    throw new Error('Something falied');
    console.log('Do this');
}).catch(() => {
    console.log('Do that');
}).then(() => {
    console.log('Do this, no matter what happen before');
})