const validateBut = document.getElementById("validateBut")
validateBut.addEventListener('click', function(e){
    e.preventDefault()
    checkEmail()
})
let checkEmail = () =>{
let resultDiv = document.getElementById('results').style.display = "block"
let getEmailVal = document.getElementById('email').value;


const getError = document.getElementById("error");
const userName = document.getElementById("user");
const validEmail = document.getElementById("valid");
const mxRecords = document.getElementById("mxrecord");
const emailDomain = document.getElementById('domain');
const freeEmail = document.getElementById('freeEmail')
const score = document.getElementById('score')



if(getEmailVal.length === 0){
 getError.style.display = "block"
}
else{
    getError.style.display = "none";

    fetch(`https://apilayer.net/api/check?access_key=06354111e7a9ea5ad55585bbf513a592&email=${getEmailVal}`)
.then(response => response.json())
.then(data => {
    userName.innerHTML = data.user;
    (data.mx_found)? validEmail.innerHTML = "Valid": validEmail.innerHTML = "invalid";
    mxRecords.innerHTML = data.mx_found;
   emailDomain.innerHTML = data.domain;
    (data.free)? freeEmail.innerHTML = "This Email is free" : freeEmail.innerHTML ="This Email is not free";
    score.innerHTML =  data.score;

    document.getElementById('formu').reset()
})
.catch(err => {
	console.log(err);
});
}


}

// fetch('https://api.github.com/users/KrunalLathiya')
// .then(response => response.json())
// .then(data => {
//   console.log(data) // Prints result from `response.json()` in getRequest
// })
// .catch(error => console.error(error))
