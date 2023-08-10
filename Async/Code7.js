(
function(){
 
   function setUserInfo(){
     return setUserName;
   }
    function setUserName(name) {
        userName = name;
        return setUserAge;
    }
    function setUserAge(age) {
        userAge = age;
        return setUserDsignation;
    }    
    function setUserDsignation(designation) {
        userDesignation = designation;
        showAllDeatils();
    }
    function showAllDeatils()
    {
        console.log(userName + " " + userAge + " " + userDesignation);
    }
    setUserInfo()("Test Name")(10)("Test Designation");

})();